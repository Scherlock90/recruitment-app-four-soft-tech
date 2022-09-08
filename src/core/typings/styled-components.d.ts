import { theme } from 'config/themes';

type ThemeInterface = typeof theme;

export declare module 'styled-components' {
  interface DefaultTheme extends TThemes {
    data: unknown;
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
      secondary: secondary;
      greyPrimary: string;
      greySecondary: string;
      hoverColor: string;
      black: string;
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
  }

  export declare type TCss = FlattenSimpleInterpolation;
}
