import { useEffect, useState } from 'react';

import { THEMES } from './schema';

import { TSingleTheme, TThemes, TUseTheme } from './types';

export const useTheme = (): TUseTheme => {
  const allThemes = THEMES;
  const [theme, setTheme] = useState<TSingleTheme>(allThemes.data.main);
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

  const setMode = (mode: TSingleTheme): void => setTheme(mode);

  const handleSetTheme = (localThemes: TThemes): void => {
    localThemes && setTheme(localThemes.data.main);
    setThemeLoaded(true);
  };

  useEffect(() => handleSetTheme(THEMES), []);

  return {
    theme,
    themeLoaded,
    setMode,
    handleSetTheme
  };
};
