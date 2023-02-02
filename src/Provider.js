import React, { createContext, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/typography.css';

const GlobalStyles = createGlobalStyle`
    body, html {
      background-color: #efede4;
    }

    img {
      -webkit-touch-callout: none;
    }
`;

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
