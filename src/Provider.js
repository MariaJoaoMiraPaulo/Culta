import React, { createContext, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/typography.css';

const GlobalStyles = createGlobalStyle`
    body, html {
      background-color: ${props => props.bodyColor};
      color: ${props => props.bodyColor !== '#efede4' && '#efede4'}
    }

    img {
      -webkit-touch-callout: none;
    }
`;

export const BodyColorContext = createContext({
  bodyColor: '',
  setBodyColor: () => {},
});

const Provider = ({ children }) => {
  const [bodyColor, setBodyColor] = useState(theme.colors['marble']);

  return (
    <BodyColorContext.Provider value={{ bodyColor, setBodyColor }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles bodyColor={bodyColor} />
        {children}
      </ThemeProvider>
    </BodyColorContext.Provider>
  );
};

export default Provider;
