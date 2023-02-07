import React from 'react';
import { ThemeProvider } from 'styled-components';
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
    <link
      as="style"
      rel="stylesheet preload prefetch"
      href="/fonts/HelveticaNeue-Medium.ttf"
      type="text/css"
      crossOrigin="anonymous"
      key="HelveticaNeue"
    />,
  ]);
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
