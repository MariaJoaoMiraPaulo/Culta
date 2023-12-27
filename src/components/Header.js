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

const Header = ({ shortenedVersion, color }) => {
  return (
    <HeaderWrapper shortenedVersion={shortenedVersion}>
      <LogoComponent color={color} shortenedVersion={shortenedVersion} />
      <Menu color={color} />
    </HeaderWrapper>
  );
};

export default Header;
