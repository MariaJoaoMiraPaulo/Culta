import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import TextSection from './TextSection';
import { devices } from '../../styles/devices';

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media ${devices.tablet} {
    flex-direction: row;
    padding-bottom: 0;
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

const ImageTextSection = ({ color, body, title, padding, image, imageAlt }) => {
  return (
    <ImageTextWrapper>
      <ImageWrapper>
        <Image image={image} alt={imageAlt} />
      </ImageWrapper>
      <TextWrapper>
        <TextSection
          color={color}
          body={body}
          title={title}
          padding={padding}
        />
      </TextWrapper>
    </ImageTextWrapper>
  );
};

export default ImageTextSection;
