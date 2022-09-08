import { AxiosResponse } from 'axios';

import { HTTP } from '../HTTP';

import { TApplicationList } from 'src/core/typings/application-list';

import { ERROR_MESSAGE, LIST_ENDPOINT } from '../constants';

export default {
  /**
   * @method getList
   * @description This method handle fetch application list from API. Return list or message about error.
   */
  async getList(isThrowError: boolean): Promise<AxiosResponse<TApplicationList[]> | typeof ERROR_MESSAGE> {
    try {
      return await HTTP(isThrowError).get(LIST_ENDPOINT);
    } catch (err) {
      console.error(err);

      return ERROR_MESSAGE;
    }
  }
};
