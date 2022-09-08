import MockAdapter from 'axios-mock-adapter/types';

import { LIST_ENDPOINT } from 'src/api/constants';

/**
 * @description This function return list of users.
 * @function getAppList
 * @category API GET USERS SERVICE MOCKED
 */
export const getAppList = (mock: MockAdapter, isThrowError: boolean): void => {
  const APP_LIST = Array.from({ length: 36 }, (_, index) => {
    const properIndexValue = index + 1
    const company = `Company ${properIndexValue}`
    const name = `Name ${properIndexValue}`

    return { company, id: index, name }
  })

  const GET_APP_LIST = mock.onGet(LIST_ENDPOINT);
  isThrowError ? GET_APP_LIST.networkError() : GET_APP_LIST.reply(200, APP_LIST);
};
