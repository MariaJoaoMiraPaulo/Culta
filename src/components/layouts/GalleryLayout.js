import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { BodySmall } from '../../styles/typographyComponents';
import { Link } from 'gatsby';
import GrainyEffectImage from '../effect/GrainyEffectImage';
import { withTrans } from '../../i18n/withTrans';
import ImageTextSection from '../sections/ImageTextSection';
import TitleSection from '../sections/TitleSection';

const GalleryGrid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  max-width: fit-content;
  margin: 20px 0px 60px 0px;

  img:hover {
    filter: blur(10px);
    transform: scale(1.05);
  }

  @media ${devices.tablet} {
    margin: 20px 0px 60px 0px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.desktop} {
    margin: 20px 0px 60px 0px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.desktopL} {
    margin: 20px 0px 60px 0px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 90vh;
`;

const PhotoWrapper = styled.div`
  height: 300px;
  cursor: pointer;
  position: relative;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.marble};
    display: none;
  }

  &:hover {
    span {
      display: block;
    }
  }
`;

const OverlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: -webkit-fill-available;
  z-index: 10;
`;

const ZoomedImage = styled.div`
  max-width: 98%;
  max-height: 98%;
  position: relative;
  overflow: hidden;

  @media ${devices.tablet} {
    max-width: 70%;
    max-height: 90%;
  }
`;

const Author = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  padding: 0px 12px;
  pointer-events: none;

  @media ${devices.tablet} {
    padding: 0px 15px;
  }
`;

const AuthorBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
  color: ${({ theme }) => theme.colors.marble};
  padding: 10px 20px;
  box-sizing: content-box;
  span {
    font-size: 16px;
  }
`;

const AuthorLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.marble};

  &: hover {
    color: transparent;
    text-shadow: 0 0 ${({ radius }) => radius || '10px'}
      ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
  }
  &: visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.marble};
  }
`;

const GalleryLayout = ({ t, photos, images }) => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const overlayRef = useRef(null);
  const galleryRef = useRef(null);
  const handleZoom = image => setZoomedImage(image);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        !overlayRef?.current?.contains(e.target) &&
        !galleryRef?.current?.contains(e.target)
      ) {
        setZoomedImage(null);
      }
    };

    const handleEscClick = e => {
      if (e.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscClick, false);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscClick, false);
    };
  }, [zoomedImage]);

  return (
    <>
      <TitleSection
        padding="4rem 1rem"
        paddingMobile="1rem 1rem"
        title={t('gallery.gallery').toUpperCase()}
        background="marble"
        color="blue"
      />
      <ImageTextSection
        color="blue"
        body={t('gallery.body') + 'geral@culta.pt' + '.'}
        image={images['gallery.jpg']}
        imageAlt={t('gallery.gallery')}
        padding="0"
        paddingMobile="1rem 0"
      />
      <CenteredDiv>
        <GalleryGrid ref={galleryRef}>
          {photos.map(
            ({ node }) =>
              node.photo.gatsbyImageData && (
                <PhotoWrapper
                  key={node.photo.id}
                  onClick={() => handleZoom(node)}
                >
                  <GrainyEffectImage showOriginalOnHover={false}>
                    <GatsbyImage
                      style={{ height: '100%', width: '100%' }}
                      image={node.photo.gatsbyImageData}
                      alt={node.description || 'gallery image'}
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </GrainyEffectImage>
                  <Author>
                    <BodySmall>{node.author.toUpperCase()}</BodySmall>
                  </Author>
                </PhotoWrapper>
              ),
          )}
        </GalleryGrid>
      </CenteredDiv>
      {zoomedImage && (
        <OverlayWrapper>
          <Overlay>
            <ZoomedImage ref={overlayRef}>
              <GatsbyImage
                image={zoomedImage.photo.gatsbyImageData}
                alt={zoomedImage.description || 'gallery image'}
                placeholder="blurred"
                imgStyle={{ objectFit: 'contain' }}
              />
              <AuthorBox>
                <AuthorLink
                  href={zoomedImage.authorsProfileLink}
                  target="_blank"
                >
                  <BodySmall>{zoomedImage.author.toUpperCase()}</BodySmall>
                </AuthorLink>
              </AuthorBox>
            </ZoomedImage>
          </Overlay>
        </OverlayWrapper>
      )}
    </>
  );
};

export default withTrans(GalleryLayout);
