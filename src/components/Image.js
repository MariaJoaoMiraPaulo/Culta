import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.a`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  padding: 0;
`;

const ImageSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  color: ${props => props.theme.colors.marble};
  position: relative;
`;

const ImageSection = ({ image, imageAlt }) => {
  return (
    <SectionWrapper>
      <ImageSectionWrapper>
        <GatsbyImage
          image={image}
          alt={imageAlt}
          placeholder="blurred"
          layout="fixed"
        />
      </ImageSectionWrapper>
    </SectionWrapper>
  );
};

export default ImageSection;
