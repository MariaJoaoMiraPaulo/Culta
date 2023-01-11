import React from 'react';
import './src/styles/typography.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

const GlobalStyles = createGlobalStyle`
    body, html {
      background-color: #efede4;
    }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
