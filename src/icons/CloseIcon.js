import React from 'react';
import { useTheme } from 'styled-components';

const CloseIcon = ({ color, onClickHandler }) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
      fill={theme.colors[color] || theme.colors.red}
      onClick={onClickHandler}
      width="20px"
      viewBox="0 0 500.189 501.318"
    >
      <path
        d="M11.387,490,245,255.832,478.613,490l10.826-10.826L255.809,245,489.439,10.811,478.613,0,245,234.161,11.387,0,.561,10.811,234.191,245,.561,479.174Z"
        transform="translate(5.094 5.658)"
        stroke={color}
        strokeWidth="35"
      />
    </svg>
  );
};

export default CloseIcon;
