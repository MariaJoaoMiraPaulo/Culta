import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../styles/typographyComponents';
import { GatsbyImage } from 'gatsby-plugin-image';
import GrainyEffectImage from '../effect/GrainyEffectImage';
import { devices } from '../../styles/devices';

const SectionWrapper = styled.a`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  padding: 0;
`;

const ImageSectionWrapper = styled.div`
  width: 100%;
  height: 20rem;
  color: ${props => props.theme.colors.marble};
  position: relative;
  cursor: pointer;
  max-width: 100%;
  overflow: hidden;

  @media ${devices.tablet} {
    height: 30rem;

    &: hover {
      color: transparent;
      z-index: 1;
      text-shadow: 0 0 ${({ radius }) => radius || '10px'}
        ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
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
  padding: 20px 20px;
  max-width: 100%;
  pointer-events: none;

  @media ${devices.tablet} {
    padding: 20px 40px;
    max-width: 50%;
  }
`;

const ImageSection = ({ background, color, image, title, linkTo }) => {
  return (
    <SectionWrapper color={color} background={background} href={linkTo}>
      <ImageSectionWrapper>
        <GrainyEffectImage>
          <GatsbyImage
            image={image}
            alt={title}
            placeholder="blurred"
            layout="fixed"
            style={{ height: '100%', filter: `blur(5px)` }}
          />
        </GrainyEffectImage>
        <ImageContent>
          <SubTitle>{title}</SubTitle>
        </ImageContent>
      </ImageSectionWrapper>
    </SectionWrapper>
  );
};

export default ImageSection;
