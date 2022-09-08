import { TUseList } from './hooks/list/types';
import { TSingleTheme } from '../theme/types';
import { TUseDetails } from './hooks/details/types';

export type TUseApp = () => {
  theme: TSingleTheme;
  themeLoaded: boolean;
  isListLoading: ReturnType<TUseList>['isListLoading']
  details: ReturnType<TUseDetails>['details'];
  applicationListData: ReturnType<TUseList>['applicationListData'];
  takeDetailId: ReturnType<TUseDetails>['takeDetailId'];
} 