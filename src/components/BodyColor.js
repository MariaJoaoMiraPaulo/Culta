import { useContext, useLayoutEffect } from 'react';
import { useTheme } from 'styled-components';
import { BodyColorContext } from '../Provider';

const BodyColor = ({ children, color = 'marble' }) => {
  const { setBodyColor } = useContext(BodyColorContext);
  const theme = useTheme();

  useLayoutEffect(
    () => {
      setBodyColor(theme.colors[color]);
    },
    [setBodyColor, theme.colors],
    color,
  );

  return children;
};

export default BodyColor;
