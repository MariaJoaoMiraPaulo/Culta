import { graphql } from 'gatsby';
import React from 'react';
import GalleryLayout from '../components/layouts/GalleryLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import { SEO } from '../components/SEO';
import metadata from '../data/metadata';

const Gallery = ({ data }) => {
  return (
    <>
      <SEO
        title={metadata.gallery.title}
        description={metadata.gallery.description}
        pathname="gallery"
        fullImageUrl={
          data.allContentfulGalleryPhoto.edges[0].node.photo.gatsbyImageData
            .images.fallback.src
        }
      />
      <LayoutWrapper logoColor="red">
        <GalleryLayout photos={data.allContentfulGalleryPhoto.edges} />
      </LayoutWrapper>
    </>
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
