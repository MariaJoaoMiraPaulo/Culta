import React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import ImageSection from './ImageSection';
import TextSection from './TextSection';

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  width: 50%;
  margin: 0 1rem;
`;

const TextWrapper = styled.div`
  width: 50%;
  margin: 0 1rem;
`;

const ImageTextSection = ({color, body, title, percentage, imagePath }) => {
  return (
      <ImageTextWrapper>
        <ImageWrapper>
          <ImageSection imagePath={imagePath}/>
        </ImageWrapper>
        <TextWrapper>
          <TextSection color={color} body={body} title={title} percentage={percentage}/>
        </TextWrapper>
      </ImageTextWrapper>
  );
};

export default ImageTextSection;