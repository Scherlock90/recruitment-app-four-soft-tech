import { useCallback, useEffect, useState } from 'react';

import { ServiceFactory } from 'src/api/ServiceFactory';

import { TTakeAllApplication, TUseList } from './types';

import { ERROR_MESSAGE } from 'src/api/constants';

//Take proper service
const APPLICATION_LIST = ServiceFactory.get<'list'>('list');

export const useList: TUseList = () => {
    const [applicationListData, setApplicationListData] = useState<ReturnType<TUseList>['applicationListData']>([]);
    const [isListLoading, setIsListLoading] = useState(false);

    /**
     * @function takeAllApplication
     * @description This function takes all available application from API.
    */
    const takeAllApplication: TTakeAllApplication = useCallback(async () => {
        setIsListLoading(true)
        const response = await APPLICATION_LIST.getList(false);

        if (response === ERROR_MESSAGE) {
            //if response is undefined - means some error occured then return empty arrays
            setApplicationListData([]);
            setIsListLoading(false)

            return;
        }

        if (response && response.data) {
            setApplicationListData(response.data);
            setIsListLoading(false);
        }
    }, []);

    useEffect(() => {
        (async() => await takeAllApplication())()
    }, []);

    return {isListLoading, applicationListData}
}