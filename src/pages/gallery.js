import { graphql } from 'gatsby';
import React from 'react';
import GalleryLayout from '../components/layouts/GalleryLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import BodyColor from '../components/BodyColor';

const Gallery = ({ data }) => {
  return (
    <BodyColor>
      <LayoutWrapper logoColor="red">
        <GalleryLayout photos={data.allContentfulGalleryPhoto.edges} />
      </LayoutWrapper>
    </BodyColor>
  );
};

export default Gallery;

export const query = graphql`
  query MyQuery {
    allContentfulGalleryPhoto(
      sort: { fields: photo___createdAt, order: DESC }
    ) {
      edges {
        node {
          photo {
            contentful_id
            gatsbyImageData(layout: CONSTRAINED)
            description
            id
          }
          author
          authorsProfileLink
        }
      }
    }
  }
`;
