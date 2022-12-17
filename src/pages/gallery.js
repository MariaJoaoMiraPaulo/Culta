import { graphql } from 'gatsby';
import React from 'react';
import Asset from '../components/blog/Asset';

const Gallery = ({ data }) => {
  console.log('HERE', data.allContentfulGalleryPhoto.edges);
  return (
    <>
      {data.allContentfulGalleryPhoto.edges.map(({ node }) => (
        <Asset id={node.photo.contentful_id} assets={data.allContentfulAsset} />
      ))}
    </>
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
