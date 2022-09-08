import { createGlobalStyle } from 'styled-components';

import { TSingleTheme } from './types';

export const GlobalStyles = createGlobalStyle<{ theme: TSingleTheme }>`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.text};
    height: 100vh;
    margin: 0 !important;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #ffffff;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;
