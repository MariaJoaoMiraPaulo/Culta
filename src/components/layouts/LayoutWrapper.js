import * as React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import MyFooter from '../Footer';
import LogoComponent from '../LogoComponent';

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/1.jpg');
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;

  max-width: 100%;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: ${({ minHeight }) => minHeight || "0vh"}
`;

const LayoutWrapper = ({ children, logo, logoColor, isHomepage=false }) => {
  return (
    <>
    {isHomepage ?
      <Banner>
        <Header minHeight = "100vh">
          <LogoComponent color={logoColor} logo={logo} />
          <Menu />
        </Header>
        {children}
        <MyFooter />
      </Banner>
    : 
      <>
      <Header>
        <LogoComponent color={logoColor} logo={logo} />
        <Menu />
      </Header>
       {children}
      <MyFooter />  
      </>  
    }
    </>
  );
};

export default LayoutWrapper;
