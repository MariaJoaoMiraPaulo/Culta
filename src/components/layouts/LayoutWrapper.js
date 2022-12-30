import * as React from 'react';
import styled from 'styled-components';
import MyFooter from '../Footer';
import Header from '../Header';

const Banner = styled.div`
  max-width: 100%;
  height: 100vh;
  background-image: url('/images/1.jpg');
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Page = styled.div`
  max-width: 100%;
`;

const LayoutWrapper = ({ children, inline, logoColor, isHomepage = false }) => {
  return (
    <>
      {isHomepage ? (
        <>
          <Banner>
            <Header inline={inline} logoColor={logoColor} />
          </Banner>
          {children}
          <MyFooter />
        </>
      ) : (
        <Page>
          <Header />
          {children}
          <MyFooter />
        </Page>
      )}
    </>
  );
};

export default LayoutWrapper;
