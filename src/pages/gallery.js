import { graphql } from 'gatsby';
import React, { useContext, useLayoutEffect } from 'react';
import GalleryLayout from '../components/layouts/GalleryLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import { useTheme } from 'styled-components';
import { BodyColorContext } from '../Provider';

const Gallery = ({ data }) => {
  const { setBodyColor } = useContext(BodyColorContext);
  const theme = useTheme();

  useLayoutEffect(() => {
    setBodyColor(theme.colors['marble']);
  }, [setBodyColor, theme.colors]);

  return (
    <LayoutWrapper logoColor="red">
      <GalleryLayout photos={data.allContentfulGalleryPhoto.edges} />
    </LayoutWrapper>
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
