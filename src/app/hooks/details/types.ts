import { TRefreshDetailData, TTakeDetailId } from "src/core/typings/app"
import { TDetails } from "src/core/typings/details"

export type TUseDetails = () => {
    details: TDetails[],
    takeDetailId: TTakeDetailId
}

export type TLoadDetails = (id: number, refreshData: boolean) => Promise<void>

export type TUpdateListDetails = (detail: TDetails) => void