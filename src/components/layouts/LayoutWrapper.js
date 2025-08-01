import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  overflow: hidden;
`;

const Page = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor] || 'none'};
  max-width: 100%;
`;

const PagePadding = styled.div`
  padding: ${props => (props.noPadding ? '0' : '2rem')};
`;

const LayoutWrapper = ({
  bannerImage,
  children,
  shortenedVersion = true,
  color,
  isHomepage = false,
  backgroundColor = 'marble',
}) => {
  const bannerImageObject = getImage(bannerImage);

  useEffect(() => {
    const handleAvoidSaveImage = e => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('contextmenu', handleAvoidSaveImage);
    document.addEventListener('taphold', handleAvoidSaveImage);

    return () => {
      document.removeEventListener('contextmenu', handleAvoidSaveImage);
      document.removeEventListener('taphold', handleAvoidSaveImage);
    };
  });

  return (
    <>
      {isHomepage ? (
        <>
          <Banner>
            <BannerImage>
              <GrainyEffectImage noBorders={false} grainyWithNoEffect>
                <GatsbyImage
                  image={bannerImageObject}
                  alt="banner image"
                  placeholder="blurred"
                  loading="blur"
                  layout="full_width"
                  style={{ height: '100%', width: '100%' }}
                />
              </GrainyEffectImage>
            </BannerImage>
            <Header shortenedVersion={shortenedVersion} color={color} />
          </Banner>
          <PagePadding noPadding>{children}</PagePadding>
          <MyFooter />
        </>
      ) : (
        <Page backgroundColor={backgroundColor}>
          <Header color={color} />
          <PagePadding noPadding>{children}</PagePadding>
          <MyFooter />
        </Page>
      )}
    </>
  );
};

export default LayoutWrapper;
