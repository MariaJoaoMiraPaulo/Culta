import React from 'react';
import { useTheme } from 'styled-components';

const ArrowIcon = ({ left = false, color, onClickHandler, style }) => {
  const theme = useTheme();

  return (
    <svg
      style={{
        cursor: 'pointer',
        transform: left ? 'rotate(270deg)' : 'rotate(90deg)',
        ...style,
      }}
      fill={theme.colors[color] || '#000'}
      onClick={onClickHandler}
      x="0px"
      y="0px"
      viewBox="0 0 490 490"
      stroke={theme.colors[color]}
    >
      <g>
        <polygon
          points="237.343,31.931 237.343,490 252.657,490 252.657,31.931 390.651,189.082 402.167,178.972 245,0 87.833,178.972 
       99.349,189.082"
        />
      </g>
    </svg>
  );
};

export default ArrowIcon;
