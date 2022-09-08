import { useCallback, useEffect, useState } from 'react';

import { ServiceFactory } from 'src/api/ServiceFactory';

import { ERROR_MESSAGE } from 'src/api/constants';

//types
import { TLoadDetails, TUpdateListDetails, TUseDetails } from './types';
import { TDetails } from 'src/core/typings/details';

const APPLICATION_DETAILS = ServiceFactory.get<'details'>('details');

export const useDetails: TUseDetails = () => {
  const [details, setDetails] = useState<TDetails[]>([]);
  const [detailId, setDetailId] = useState<number>();
  const [openedDetailIdList, setOpenedDetailIdList] = useState<number[]>([]);
  const [refreshData, setRefreshData] = useState(false);

  //handlers
  /**
    * @function loadDetails
    * @description This function takes details about application from API.
   */
  const updateListDetails: TUpdateListDetails = useCallback((detail) => {
    setDetails((prevState) => [...prevState, detail])
  }, [detailId])

  /**
    * @function refreshDetail
    * @description This function refreshed choosen detail.
   */
  const refreshDetail: TUpdateListDetails = useCallback((refreshDetail) => {
    setDetails((prevState) => prevState.map(detail => detail.id === refreshDetail.id ? refreshDetail : detail))
  }, [detailId])

  /**
    * @function loadDetails
    * @description This function takes details about application from API.
   */
  const loadDetails: TLoadDetails = useCallback(async (id, refreshData) => {
    //check if the element is already loaded here
    if (openedDetailIdList.length > 0 && openedDetailIdList.find(idx => idx === detailId)) {
      return
    }

    const response = await APPLICATION_DETAILS.getAppDetails(id, false);

    if (response === ERROR_MESSAGE) {
      return;
    }

    if (!refreshData && response && response.data) {
      setOpenedDetailIdList(prevState => {
        if (prevState.length > 0) {
          return prevState?.find(idx => idx === id)
            ? prevState
            : [...prevState, id]
        }

        return [id]
      })

      updateListDetails(response.data);
    } else {
      refreshDetail(response.data)
    }
  }, [detailId])

  /**
   * @function takeDetailId
   * @description This function takes id number from the list.
  */
  const takeDetailId: ReturnType<TUseDetails>['takeDetailId'] = (id, isRefreshingData) => {
    setDetailId(id)
    setRefreshData(isRefreshingData)
  }

  //useEffects
  useEffect(() => {
    if (detailId !== undefined) {
      loadDetails(detailId, refreshData)
    }
  }, [detailId, refreshData]);

  return { details, takeDetailId }
}