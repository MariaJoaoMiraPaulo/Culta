import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import TextSection from './TextSection';
import { devices } from '../../styles/devices';

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};

  @media ${devices.tablet} {
    flex-direction: row;
    padding-bottom: 0;
    display: flex;
  }

  @media ${devices.laptop} {
    display: ${props => (props.hideOnDesktop ? 'none' : 'flex')};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: 0;

  @media ${devices.tablet} {
    width: 50%;
    margin: 0 1rem;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  margin: 0 1rem;

  @media ${devices.tablet} {
    width: 50%;
  }
`;

const ImageTextSection = ({
  color,
  background,
  body,
  title,
  padding,
  image,
  imageAlt,
  paddingMobile,
  hideOnDesktop = false,
}) => {
  return (
    <ImageTextWrapper background={background} hideOnDesktop={hideOnDesktop}>
      <ImageWrapper>
        <Image image={image} imageAlt={imageAlt} />
      </ImageWrapper>
      <TextWrapper>
        <TextSection
          background={background}
          color={color}
          body={body}
          title={title}
          padding={padding}
          paddingMobile={paddingMobile}
        />
      </TextWrapper>
    </ImageTextWrapper>
  );
};

export default ImageTextSection;
