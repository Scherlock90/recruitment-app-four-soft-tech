import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
//services
import { getDetails } from './details-service';
import { getAppList } from './list-service';

export const mockMetadata = (HTTP: AxiosInstance, isThrowError: boolean): void | false => {
  const MOCK = new MockAdapter(HTTP, { delayResponse: 200 });

  //create new services object
  const SERVICES_MOCKED_DATA: false | { [key: string]: unknown } = !!MOCK && {
    appList: getAppList(MOCK, isThrowError),
    details: getDetails(MOCK, isThrowError)
  };

  //invoke this services
  !!MOCK && !!SERVICES_MOCKED_DATA && ['appList', 'details'].forEach((name: string) => SERVICES_MOCKED_DATA[name]);
};
