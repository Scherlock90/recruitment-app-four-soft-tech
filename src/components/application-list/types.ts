import { TUseApp } from "src/app/types";

export type TApplicationListProps = Pick<ReturnType<TUseApp>, 'applicationListData' | 'takeDetailId'>