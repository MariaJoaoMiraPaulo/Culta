import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import LogoComponent from './LogoComponent';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.shortenedVersion ? 'center' : 'flex-start')};
  width: 100%;
  z-index: 1;
`;

const Header = ({ shortenedVersion = true, logoColor }) => {
  return (
    <HeaderWrapper shortenedVersion={shortenedVersion}>
      <LogoComponent color={logoColor} shortenedVersion={shortenedVersion} />
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
