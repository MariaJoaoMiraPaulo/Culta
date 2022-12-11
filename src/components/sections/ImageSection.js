import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../styles/typographyComponents';

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

  &: hover {
    color: transparent;
    z-index: 9;
    cursor: pointer;
    text-shadow: 0 0 ${({ radius }) => radius || '10px'}
      ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
  }

  max-width: 100%;
  overflow: hidden;
`;

const ImageSectionCover = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image || '/images/1.jpg'});
  background-size: cover;
  background-position: center center;
  filter: blur(10px);
  transform: scale(1.05);

  &: hover {
    filter: blur(0px);
  }
`;

const ImageContent = styled.div`
  background-color: rgb(1, 1, 1, 0);
  display: flex;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 40px;
  max-width: 50%;
`;

const ImageSection = ({ background, color, imagePath, title, linkTo }) => {
  return (
    <SectionWrapper color={color} background={background} href={linkTo}>
      <ImageSectionWrapper>
        <ImageSectionCover image={imagePath} />
        <ImageContent>
          <SubTitle>{title}</SubTitle>
        </ImageContent>
      </ImageSectionWrapper>
    </SectionWrapper>
  );
};

export default ImageSection;
