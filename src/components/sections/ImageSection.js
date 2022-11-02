import React from 'react';
import styled from 'styled-components';
import { SubTitleBold } from '../../styles/typographyComponents';
import { LinkWrapper } from '../LinkWrapper';

const SectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  padding: 0;
`;

const ImageSectionWrapper = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${props => props.image || '/images/1.jpg'});
  background-size: cover;
  background-position: center center;
  color: ${props => props.theme.colors.marble};
  position: relative;
`;

const ImageSectionCover = styled.div`
  z-index: 0;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  background: black;
  position: relative;
`;

const ImageContent = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 40px;
  max-width: 50%;
`;

const ImageSection = ({ background, color, imagePath, title, linkTo }) => {
  return (
    <SectionWrapper color={color} background={background}>
      <ImageSectionWrapper image={imagePath}>
        <ImageSectionCover />
        <ImageContent>
          <LinkWrapper to={linkTo}>
            <SubTitleBold>{title}</SubTitleBold>
          </LinkWrapper>
        </ImageContent>
      </ImageSectionWrapper>
    </SectionWrapper>
  );
};

export default ImageSection;
