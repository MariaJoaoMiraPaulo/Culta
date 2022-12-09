import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      as="style"
      rel="stylesheet preload prefetch"
      href="/fonts/SangBleuOGSerif-Light.ttf"
      type="text/css"
      crossOrigin="anonymous"
      key="SangBleuOGSerif"
    />,
    <link
      as="style"
      rel="stylesheet preload prefetch"
      href="/fonts/HelveticaNeue-Light.ttf"
      type="text/css"
      crossOrigin="anonymous"
      key="HelveticaNeue"
    />,
  ]);
};

const GlobalStyles = createGlobalStyle`
    body, html {
        background-color: ${props => props.theme.colors.marble};
    }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
