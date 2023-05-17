
import axios, {  AxiosInterceptorManager, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

import { mockMetadata } from './mock';

import { BASE_URL, MOCKED_BASE_URL, TEST_ENV, UNABLE_TO_CHECK_RESPONSE_STATUS } from './constants';

function retryAdapterEnhancer(adapter: any, options: any) {
  const { times = 0, delay = 300 } = options;

  return async (config: any) => {
    const { retryTimes = times, retryDelay = delay } = config;
    let __retryCount = 0;
    const request = async (): Promise<any> => {
      try {

        return await adapter(config);
      } catch (err) {

        // Check whether to retry
        if (!retryTimes || __retryCount >= retryTimes) {
          return Promise.reject(err);
        }
        __retryCount++; // Increase the number of retries
        const delay = new Promise((resolve) => {
          setTimeout(() => {
            resolve('resolve');
          }, retryDelay);
         });

         // Resend
         return delay.then(() => {

           return request();
         });
        }
      };
   return request();
  };
}

interface IRetry { retry: number; retryDelay: number }

interface extendedAxiosRequestConfig extends AxiosRequestConfig, IRetry {}

interface ExtendedAxiosInstance  {
  (config: AxiosRequestConfig): AxiosPromise;
  (url: string, config?: AxiosRequestConfig): AxiosPromise;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(url: string, config?: extendedAxiosRequestConfig): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}

type THTTP = (isThrowError?: boolean) => ExtendedAxiosInstance

export const HTTP: THTTP = (): ExtendedAxiosInstance => {
  const IS_TEST_ENVIRONMENT = process.env.NODE_ENV === TEST_ENV;

  //this varialbe decide from where you will take response - true(mock data), false(real data). By default should be false.
  const IS_MOCKED_DATA = IS_TEST_ENVIRONMENT || false;

  //Mock data http server
  const HTTP_MOCK = axios.create({ baseURL: MOCKED_BASE_URL });

  //create instance
  const HTTP_INSTANCE = axios.create({
    baseURL: BASE_URL,
    // adapter: retryAdapterEnhancer(axios.defaults.adapter, {
    //   retryDelay: 1000,
    // })
  });

  

  //set a proper instance to handling the data
  const PROPER_INSTANCE = IS_MOCKED_DATA ? HTTP_MOCK : HTTP_INSTANCE;

  //inceterceptor
  PROPER_INSTANCE.interceptors.response.use(
    // (response): AxiosResponse<unknown> => response,
    undefined,
    (error): any => {
      console.error(UNABLE_TO_CHECK_RESPONSE_STATUS, error);

      const { config, message } = error;
    if (!config || !config.retry) {

      return Promise.reject(error);
    }
    // retry while Network timeout or Network Error
    if (!(message.includes("timeout") || message.includes("Network Error"))) {

      return Promise.reject(error);
    }

    config.retry -= 1;
    const delayRetryRequest = new Promise((resolve) => {
      setTimeout(() => {
        console.log("retry the request", config.url);
        resolve('resolve');
      }, config.retryDelay || 1000);
    });

    return delayRetryRequest.then(() => HTTP_INSTANCE(config));
    }
  );


  //enabled mocked data
  IS_MOCKED_DATA && mockMetadata(HTTP_MOCK, false);

  return PROPER_INSTANCE;
};

