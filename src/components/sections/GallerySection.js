import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { BiggerCaption } from '../../styles/typographyComponents';
import { GatsbyImage } from 'gatsby-plugin-image';
import ArrowIcon from '../../icons/ArrowIcon';
import { withTrans } from '../../i18n/withTrans';

const GallerySectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;

  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
  }
`;

const DescriptionImage = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  gap: 2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;
  gap: 0.5rem;
`;

const SlideshowArrow = styled.div`
  position: absolute;
  top: 50%;
  cursor: pointer;
  font-size: 24px;
  z-index: 2;
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
            <BiggerCaption>
              {t('portfolio.imageCounter', {
                number: `${currentIndex + 1}`, // Add 1 to convert from zero-based index
                total: `${projectGallery.length}`,
              })}
            </BiggerCaption>
          )}
        </Description>
        {currentImage?.gatsbyImageData && (
          <GatsbyImage
            style={{ height: '100%', width: '50%' }}
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
