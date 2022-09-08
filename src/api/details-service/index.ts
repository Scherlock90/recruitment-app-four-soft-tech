import { AxiosResponse } from 'axios';

import { HTTP } from '../HTTP';

import { TDetails } from 'src/core/typings/details';

import { ERROR_MESSAGE, APP_DETAILS_ENDPOINT } from '../constants';

export default {
  /**
   * @method getAppDetails
   * @description This method handle fetch details about the selected app from API. Return list or message about error.
   */
  async getAppDetails(id: number, isThrowError: boolean): Promise<AxiosResponse<TDetails> | typeof ERROR_MESSAGE> {
    try {
      return await HTTP(isThrowError).get(`${APP_DETAILS_ENDPOINT}/${id}`);
    } catch (err) {
      console.error(err);

      return ERROR_MESSAGE;
    }
  }
};
