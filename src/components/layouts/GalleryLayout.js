import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import Asset from '../blog/Asset';

const GalleryPageLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 25px;
  min-height: 90vh;
  @media ${devices.tablet} {
    grid-template-columns: 25% 25% 25% 25%;
  }
  @media ${devices.desktop} {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

const PhotoWrapper = styled.div``;

const GalleryLayout = ({ photos, assets }) => {
  console.log('photos', photos);
  return (
    <GalleryPageLayout>
      {photos.edges.map(({ node }) => (
        <PhotoWrapper>
          <Asset id={node.photo.contentful_id} assets={assets} />
        </PhotoWrapper>
      ))}
    </GalleryPageLayout>
  );
};

export default GalleryLayout;
