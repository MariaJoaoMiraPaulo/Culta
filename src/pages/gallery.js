import { graphql } from 'gatsby';
import React from 'react';
import GalleryLayout from '../components/layouts/GalleryLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';

const Gallery = ({ data }) => {
  return (
    <LayoutWrapper>
      <GalleryLayout
        photos={data.allContentfulGalleryPhoto}
        assets={data.allContentfulAsset}
      />
    </LayoutWrapper>
  );
};

export default Gallery;

export const query = graphql`
  query MyQuery {
    allContentfulGalleryPhoto {
      edges {
        node {
          photo {
            contentful_id
          }
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          url
          file {
            contentType
            details {
              image {
                height
                width
              }
            }
          }
          contentful_id
          description
        }
      }
    }
  }
`;
