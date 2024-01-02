import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { BiggerCaption, Caption } from '../../styles/typographyComponents';
import { GatsbyImage } from 'gatsby-plugin-image';
import ArrowIcon from '../../icons/ArrowIcon';
import { withTrans } from '../../i18n/withTrans';

const GallerySectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 4rem 0;

  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
  }
`;

const DescriptionImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  @media ${devices.tablet} {
    flex-direction: row;
    padding: ${({ padding }) => padding};
    gap: 2rem;
    width: 80%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;

  @media ${devices.tablet} {
    width: 40%;
    align-items: flex-end;
  }
`;

const SlideshowArrow = styled.div`
  position: absolute;
  top: 53.5%;
  cursor: pointer;
  z-index: 2;

  @media ${devices.tablet} {
    top: 50%;
  }
`;

const LeftArrow = styled(SlideshowArrow)`
  left: 16px;
`;

const RightArrow = styled(SlideshowArrow)`
  right: 16px;
`;

const GallerySection = ({ t, color, padding, projectGallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      prevIndex =>
        (prevIndex - 1 + projectGallery.length) % projectGallery.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % projectGallery.length);
  };

  const currentImage = projectGallery[currentIndex];

  return (
    <GallerySectionWrapper color={color} padding={padding}>
      {projectGallery.length > 1 && (
        <LeftArrow onClick={handlePrevClick}>
          <ArrowIcon left color="grey" style={{ width: '40px' }} />
        </LeftArrow>
      )}
      <DescriptionImage>
        <Description>
          <BiggerCaption>{currentImage?.description}</BiggerCaption>
          {projectGallery.length > 1 && (
            <Caption>
              {t('portfolio.imageCounter', {
                number: `${currentIndex + 1}`, // Add 1 to convert from zero-based index
                total: `${projectGallery.length}`,
              })}
            </Caption>
          )}
        </Description>
        {currentImage?.gatsbyImageData && (
          <GatsbyImage
            style={{
              height: '100%',
              width: '100%',
              [devices.tablet]: {
                maxWidth: '50%',
              },
            }}
            image={currentImage.gatsbyImageData}
            alt={currentImage?.description || 'project image'}
            placeholder="blurred"
            layout="constrained"
            {...(currentImage.gatsbyImageData?.images?.fallback && {
              fallback: {
                ...currentImage.gatsbyImageData.images.fallback,
                srcSet: currentImage.gatsbyImageData.images.fallback.srcSet,
              },
            })}
          />
        )}
      </DescriptionImage>
      {projectGallery.length > 1 && (
        <RightArrow onClick={handleNextClick}>
          <ArrowIcon right color="grey" style={{ width: '40px' }} />
        </RightArrow>
      )}
    </GallerySectionWrapper>
  );
};

export default withTrans(GallerySection);
