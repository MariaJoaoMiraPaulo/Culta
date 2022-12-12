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
`;

const Page = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: ${({ minHeight }) => minHeight || '0vh'};
`;

const ChildrenPadding = styled.div`
  padding: 3rem 0;
`;

const LayoutWrapper = ({ children, inline, logoColor, isHomepage = false }) => {
  return (
    <>
      {isHomepage ? (
        <Banner>
          <Header minHeight="100vh">
            <LogoComponent color={logoColor} inline={inline} />
            <Menu />
          </Header>
          {children}
          <MyFooter />
        </Banner>
      ) : (
        <Page>
          <Header>
            <LogoComponent color={logoColor} inline={inline} />
            <Menu />
          </Header>
          <ChildrenPadding>{children}</ChildrenPadding>

          <MyFooter />
        </Page>
      )}
    </>
  );
};

export default LayoutWrapper;
