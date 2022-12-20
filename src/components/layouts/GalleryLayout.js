import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import Asset from '../blog/Asset';

const GalleryPageLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 20px;
  padding: 25px;
  min-height: 90vh;
  @media ${devices.tablet} {
    grid-template-columns: 24% 24% 24% 24%;
  }
  @media ${devices.desktop} {
    grid-template-columns: 24% 24% 24% 24%;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoWrapper = styled.div`
  height: 200px;
`;

const GalleryLayout = ({ photos, assets }) => {
  return (
    <CenteredDiv>
      <GalleryPageLayout>
        {photos.edges.map(({ node }) => (
          <PhotoWrapper>
            <Asset id={node.photo.contentful_id} assets={assets} />
          </PhotoWrapper>
        ))}
      </GalleryPageLayout>
    </CenteredDiv>
  );
};

export default GalleryLayout;
