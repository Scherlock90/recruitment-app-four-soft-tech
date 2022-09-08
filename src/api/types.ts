import { AxiosResponse } from 'axios';
import { TApplicationList } from 'src/core/typings/application-list';

import list from './list-service';
import details from './details-service'

//Services name
export type TServicesNames = 'list' | 'details';

//Remaped keys from type and selecte returned service name with returned functions types
export type TRemapedServiceNames = { [Key in TServicesNames]: TService[Key] };

//Service name with returned functions types
export type TService = {
  list: typeof list;
  details: typeof details
};

export interface IServices {
  list: {
    getList(): Promise<AxiosResponse<TApplicationList[]> | undefined>;
  };
}
