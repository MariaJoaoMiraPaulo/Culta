import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  max-width: fit-content;
  margin: 20px 50px;
  @media ${devices.tablet} {
    grid-template-columns: repeat(5, 1fr);
  @media ${devices.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }

  img:hover {
    filter: blur(10px);
    transform: scale(1.05);
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 90vh;
  margin-top: 3rem;
`;

const PhotoWrapper = styled.div`
  height: 200px;
  cursor: pointer;
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ZoomedImage = styled.div`
  max-width: 1000px;
  max-height: 700px;
  position: relative;
`;

const GalleryLayout = ({ photos }) => {
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

    const handleRightClickImage = e => {
      console.log(e.target);
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('contextmenu', handleRightClickImage);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [zoomedImage]);

  return (
    <>
      <CenteredDiv>
        <GalleryGrid ref={galleryRef}>
          {photos.map(
            ({ node }) =>
              node.photo.gatsbyImageData && (
                <PhotoWrapper
                  key={node.photo.id}
                  onClick={() => handleZoom(node)}
                >
                  <GatsbyImage
                    style={{ height: '100%', width: '100%' }}
                    image={node.photo.gatsbyImageData}
                    alt={node.description || 'gallery image'}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </PhotoWrapper>
              ),
          )}
        </GalleryGrid>
      </CenteredDiv>
      {zoomedImage && (
        <Overlay>
          <ZoomedImage ref={overlayRef}>
            <GatsbyImage
              style={{ height: '100%', width: '100%' }}
              image={zoomedImage.photo.gatsbyImageData}
              alt={zoomedImage.description || 'gallery image'}
              placeholder="blurred"
              layout="constrained"
            />
          </ZoomedImage>
        </Overlay>
      )}
    </>
  );
};

export default GalleryLayout;
