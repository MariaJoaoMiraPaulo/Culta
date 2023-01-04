import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import MyFooter from '../Footer';
import Header from '../Header';

const Banner = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
`;

const BannerImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Page = styled.div`
  max-width: 100%;
`;

const PagePadding = styled.div`
  padding: ${props => (props.noPadding ? '0' : '2rem')};
`;

const LayoutWrapper = ({
  bannerImage,
  children,
  inline,
  logoColor,
  isHomepage = false,
  noPadding,
}) => {
  return (
    <>
      {isHomepage ? (
        <>
          <Banner>
            <BannerImage>
              <GatsbyImage
                style={{ height: '100%', width: '100%' }}
                image={bannerImage}
                alt={'banner image'}
                placeholder="blurred"
                layout="constrained"
              />
            </BannerImage>
            <Header inline={inline} logoColor={logoColor} />
          </Banner>
          <PagePadding noPadding>{children}</PagePadding>
          <MyFooter />
        </>
      ) : (
        <Page>
          <Header logoColor={logoColor} />
          <PagePadding noPadding>{children}</PagePadding>
          <MyFooter />
        </Page>
      )}
    </>
  );
};

export default LayoutWrapper;
