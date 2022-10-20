import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SangBleuOGSerif-Light.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="SangBleuOGSerif"
    />,
    <link
      rel="preload"
      href="/fonts/HelveticaNeue-Light.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="HelveticaNeue"
    />,
    <link
      rel="preload"
      href="/fonts/SangBleuOGSerif-Black.ttf"
      as="font"
      type="font/ttf"
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
