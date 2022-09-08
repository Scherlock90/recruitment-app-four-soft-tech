import { MEDIA_QURIES } from './mediaQueries';

import { TThemes } from './types';

const Theme = {
  data: 'main',
  id: 'T_001',
  name: 'Main',
  colors: {
    fonts: {
      primary: '#f1f1f1',
      white: '#ffffff' as const,
      grey: '#838383',
      greySecondary: '#a6a6a6'
    },
    white: '#ffffff' as const,
    body: '#FFFFFF',
    primary: '#490e4b',
    secondary: '#3b0044',
    greyPrimary: '#cfcfcf',
    greySecondary: '#e1dcdb',
    hoverColor: '#f5f5f5' as const,
    black: '#020000',
    text: '#000000',
    label: '#838383',
    button: {
      text: '#FFFFFF',
      background: '#000000'
    },
    link: {
      text: '#3b0044',
      opacity: 1
    }
  },
  mediaQueries: MEDIA_QURIES,
  font: {
    text: 'AauxPro OT'
  }
};

//changed in the future this is only example
export const THEMES: TThemes = {
  data: {
    main: Theme,
    otherTheme: Theme
  }
};
