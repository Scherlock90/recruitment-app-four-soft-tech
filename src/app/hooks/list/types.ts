import { TApplicationList } from "src/core/typings/application-list";

export type TUseList = () => {isListLoading: boolean; applicationListData: TApplicationList[]}

export type TTakeAllApplication = () => Promise<void>