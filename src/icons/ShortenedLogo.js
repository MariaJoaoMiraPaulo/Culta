import { navigate } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { devices } from '../styles/devices';

const SVGWrapper = styled.svg`
  cursor: pointer;
  width: 50%;
  padding: 1rem;
  z-index: 2;
  @media ${devices.mobileM} {
    width: 30%;
  }
  @media ${devices.tablet} {
    width: 20%;
  }
`;

const ShortenedLogo = ({ color }) => {
  const theme = useTheme();

  return (
    <SVGWrapper
      fill={theme.colors[color] || '#fff'}
      viewBox="0 0 1181.6 430.3"
      onClick={() => navigate('/')}
    >
      <g>
        <path d="M340.4,331.4c-34.4,26-79.2,34.1-118.2,34.1c-112.5,0-164.9-76.5-164.9-156.5c0-96,68.1-156.9,163-156.9c44.4,0,82.6,10.3,116.7,31.4l0.8,55.9h-4.2c-11.1-55.5-60.1-76.1-114-76.1c-63.5,0-136.6,44-136.6,146.9c0,96.8,73.1,144.2,137,144.2c43.2,0,105.2-10.3,117.5-78.8h4.2L340.4,331.4z" />
      </g>
    </SVGWrapper>
  );
};

export default ShortenedLogo;
