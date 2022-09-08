// eslint-disable-next-line import/named
import { TCss } from 'styled-components';

export type TThemes = {
  data: {
    main: TSingleTheme;
    otherTheme: TSingleTheme;
  };
};

export type TUseTheme = {
  theme: TSingleTheme;
  themeLoaded: boolean;
  setMode: (mode: TSingleTheme) => void;
  handleSetTheme: (localTheme: TThemes) => void;
};

export type TSingleTheme = {
  data: unknown;
  id: string;
  name: string;
  colors: {
    fonts: {
      primary: string;
      white: '#ffffff';
      grey: string;
      greySecondary: string;
    };
    body: string;
    text: string;
    white: '#ffffff';
    primary: string;
    secondary: string;
    black: string;
    greyPrimary: string;
    greySecondary: string;
    hoverColor: '#f5f5f5';
    button: {
      text: string;
      background: string;
    };
    link: {
      text: string;
      opacity: number;
    };
  };
  font: {
    text: string;
  };
  mediaQueries: {
    smartphones: string;
    smallTablet: string;
    tablet: string;
    laptop: string;
    desktop: string;
  };
};

export type TCssStylesByDeviceWidth = (
  typeDevice: 'smartphones' | 'smallTablet' | 'tablet' | 'laptop' | 'desktop',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
) => TCss;
