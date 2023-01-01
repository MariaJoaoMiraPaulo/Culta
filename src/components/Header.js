import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import LogoComponent from './LogoComponent';
import { devices } from '../styles/devices';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  z-index: 1;
`;

const Header = ({ inline, logoColor }) => {
  return (
    <HeaderWrapper>
      <LogoComponent color={logoColor} inline={inline} />
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
