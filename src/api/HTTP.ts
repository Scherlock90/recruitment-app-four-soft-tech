import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { mockMetadata } from './mock';

import { BASE_URL, MOCKED_BASE_URL, TEST_ENV, UNABLE_TO_CHECK_RESPONSE_STATUS } from './constants';

export const HTTP = (isThrowError: boolean): AxiosInstance => {
  const IS_TEST_ENVIRONMENT = process.env.NODE_ENV === TEST_ENV;

  //this varialbe decide from where you will take response - true(mock data), false(real data). By default should be false.
  const IS_MOCKED_DATA = IS_TEST_ENVIRONMENT || false;

  //Mock data http server
  const HTTP_MOCK = axios.create({ baseURL: MOCKED_BASE_URL });

  //create instance
  const HTTP_INSTANCE = axios.create({
    baseURL: BASE_URL
  });

  //set a proper instance to handling the data
  const PROPER_INSTANCE = IS_MOCKED_DATA ? HTTP_MOCK : HTTP_INSTANCE;

  //inceterceptor
  PROPER_INSTANCE.interceptors.response.use(
    (response): AxiosResponse<unknown> => response,
    (error): void => {
      console.error(UNABLE_TO_CHECK_RESPONSE_STATUS, error);
    }
  );

  //enabled mocked data
  IS_MOCKED_DATA && mockMetadata(HTTP_MOCK, isThrowError);

  return PROPER_INSTANCE;
};
