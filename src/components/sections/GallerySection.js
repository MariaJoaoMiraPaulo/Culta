import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { Body } from '../../styles/typographyComponents';
import { GatsbyImage } from 'gatsby-plugin-image';
import ArrowIcon from '../../icons/ArrowIcon';
import { withTrans } from '../../i18n/withTrans';

const GallerySectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
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
      <LeftArrow onClick={handlePrevClick}>
        <ArrowIcon left color="grey" style={{ width: '40px' }} />
      </LeftArrow>
      <Description>
        <Body>{currentImage?.description}</Body>
        <Body>
          {t('portfolio.imageCounter', {
            number: `${currentIndex + 1}`, // Add 1 to convert from zero-based index
            total: `${projectGallery.length}`,
          })}
        </Body>
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
      <RightArrow onClick={handleNextClick}>
        <ArrowIcon right color="grey" style={{ width: '40px' }} />
      </RightArrow>
    </GallerySectionWrapper>
  );
};

export default withTrans(GallerySection);
