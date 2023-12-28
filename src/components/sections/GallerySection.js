import React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import ImageSection from '../sections/ImageSection';
import { Body } from '../../styles/typographyComponents';

const GallerySectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const GallerySection = ({ color, padding }) => {
  return (
    <GallerySectionWrapper color={color} padding={padding}>
      <Description>
        <Body>Desenvolvimento redes sociais.</Body>
        <Body>Imagem 1/5</Body>
      </Description>
      <ImageSection image={''} />
    </GallerySectionWrapper>
  );
};

export default GallerySection;
