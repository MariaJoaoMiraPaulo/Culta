import React from 'react';
import { useTheme } from 'styled-components';

const CollapsedLogo = ({ color }) => {
  const theme = useTheme();

  return (
    <svg
      fill={theme.colors[color] || '#fff'}
      viewBox="0 0 1080 1080"
      width="7.25%"
    >
      <path d="M924,873.4c-93.7,70.8-215.5,92.7-321.8,92.7c-306.1,0-448.8-208.3-448.8-425.9 c0-261.4,185.4-426.9,443.6-426.9c120.8,0,224.9,28.1,317.6,85.4l2.1,152h-11.5c-30.2-151-163.5-207.2-310.3-207.2 c-172.9,0-371.7,119.7-371.7,399.9c0,263.4,198.9,392.6,372.8,392.6c117.7,0,286.4-28.1,319.7-214.5h11.5L924,873.4z"/>
    </svg>
  );
};

export default CollapsedLogo;
