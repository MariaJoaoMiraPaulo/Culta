import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MyFooter from '../Footer';
import Header from '../Header';
import GrainyEffectImage from '../effect/GrainyEffectImage';

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
}) => {
  useEffect(() => {
    const handleRightClickImage = e => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('contextmenu', handleRightClickImage);

    return () => {
      document.removeEventListener('contextmenu', handleRightClickImage);
    };
  });

  return (
    <>
      {isHomepage ? (
        <>
          <Banner>
            <BannerImage>
              <GrainyEffectImage grainyWithNoEffect>
                <GatsbyImage
                  style={{ height: '100%', width: '100%' }}
                  image={bannerImage}
                  alt={'banner image'}
                  placeholder="blurred"
                  layout="constrained"
                />
              </GrainyEffectImage>
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
