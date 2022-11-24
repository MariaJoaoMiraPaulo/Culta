import React from 'react';
import { useTheme } from 'styled-components';

const CollapsedLogo = ({ color }) => {
  const theme = useTheme();

  return (
    <svg
      fill={theme.colors[color] || '#fff'}
      viewBox="0 0 1181.65 1130.35"
      width="25%"
    >
      <path d="M340.41,331.35c-34.44,26-79.2,34-118.23,34-112.48,0-164.9-76.52-164.9-156.48,0-96,68.1-156.87,163-156.87,44.38,0,82.64,10.33,116.7,31.37l.76,55.86h-4.21c-11.09-55.48-60.07-76.14-114-76.14-63.52,0-136.6,44-136.6,146.93,0,96.79,73.08,144.24,137,144.24,43.23,0,105.22-10.33,117.46-78.82h4.21Z" />
    </svg>
  );
};

export default CollapsedLogo;
