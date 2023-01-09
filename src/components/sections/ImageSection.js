import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../styles/typographyComponents';
import { GatsbyImage } from 'gatsby-plugin-image';
import GrainyEffect, { GrainyEffectWrapper } from '../effect/GrainyEffect';

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
  cursor: pointer;

  &: hover {
    color: transparent;
    z-index: 1;
    text-shadow: 0 0 ${({ radius }) => radius || '10px'}
      ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
  }

  max-width: 100%;
  overflow: hidden;
`;

const ImageSectionCover = styled.div`
  width: 100%;
  height: 100%;
  filter: blur(1.2px);
  transform: scale(1.05);
  display: flex;
  justify-content: center;

  &:hover {
    filter: blur(0);
    ${GrainyEffectWrapper} {
      width: 0;
      height: 0;
    }
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
  pointer-events: none;
`;

const ImageSection = ({ background, color, image, title, linkTo }) => {
  return (
    <SectionWrapper color={color} background={background} href={linkTo}>
      <ImageSectionWrapper>
        <ImageSectionCover>
          <GatsbyImage
            image={image}
            alt={title}
            placeholder="blurred"
            layout="fixed"
          />
          <GrainyEffect />
        </ImageSectionCover>
        <ImageContent>
          <SubTitle>{title}</SubTitle>
        </ImageContent>
      </ImageSectionWrapper>
    </SectionWrapper>
  );
};

export default ImageSection;
