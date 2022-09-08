//Take proper service
import { useTheme } from 'src/theme/useTheme';
//types
import { TUseApp } from './types';
//custom hooks
import { useList } from './hooks/list/useList';
import { useDetails } from './hooks/details';

export const useApp: TUseApp = () => {
  const { theme, themeLoaded } = useTheme();
  //custom hooks
  const { details, takeDetailId } = useDetails()
  const { isListLoading, applicationListData } = useList()

  return { theme, themeLoaded, isListLoading, details, applicationListData, takeDetailId };
};
