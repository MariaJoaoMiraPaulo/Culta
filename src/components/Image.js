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
  height: 30rem;
  color: ${props => props.theme.colors.marble};
  position: relative;
`;

const ImageSectionCover = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image || '/images/1.jpg'});
  background-size: cover;
  background-position: center center;
`;

const ImageSection = ({imagePath}) => {
  return (
    <SectionWrapper>
      <ImageSectionWrapper>
        <ImageSectionCover image={imagePath}/>
      </ImageSectionWrapper>
    </SectionWrapper>
  );
};

export default ImageSection;
