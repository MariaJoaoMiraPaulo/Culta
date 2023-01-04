import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import LogoComponent from './LogoComponent';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.inlineLogo ? 'center' : 'flex-start')};
  width: 100%;
  z-index: 1;
`;

const Header = ({ inline, logoColor }) => {
  return (
    <HeaderWrapper inlineLogo={inline}>
      <LogoComponent color={logoColor} inline={inline} />
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
