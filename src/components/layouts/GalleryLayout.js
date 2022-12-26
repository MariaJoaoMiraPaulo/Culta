import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';

const GalleryPageLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  @media ${devices.tablet} {
    grid-template-columns: 20% 20% 20% 20% 20%;
  @media ${devices.desktop} {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 90vh;
  margin-top: 3rem;
`;

const PhotoWrapper = styled.div`
  height: 200px;
  cursor: pointer;
`;

const GalleryLayout = ({ photos }) => {
  return (
    <CenteredDiv>
      <GalleryPageLayout>
        {photos.map(
          ({ node }) =>
            node.photo.gatsbyImageData && (
              <PhotoWrapper>
                <GatsbyImage
                  style={{ height: '100%', width: '100%' }}
                  image={node.photo.gatsbyImageData}
                  alt={node.description}
                  placeholder="blurred"
                  layout="constrained"
                />
              </PhotoWrapper>
            ),
        )}
      </GalleryPageLayout>
    </CenteredDiv>
  );
};

export default GalleryLayout;
