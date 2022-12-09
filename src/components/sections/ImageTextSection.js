import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
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

const ImageTextSection = ({color, body, title, padding, imagePath }) => {
  return (
      <ImageTextWrapper>
        <ImageWrapper>
          <Image imagePath={imagePath}/>
        </ImageWrapper>
        <TextWrapper>
          <TextSection color={color} body={body} title={title} padding={padding}/>
        </TextWrapper>
      </ImageTextWrapper>
  );
};

export default ImageTextSection;
