import React, { useContext, useLayoutEffect } from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ServicesLayout from '../components/layouts/ServicesLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';
import { BodyColorContext } from '../Provider';
import { useTheme } from 'styled-components';

const ServicesPage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);
  const { setBodyColor } = useContext(BodyColorContext);
  const theme = useTheme();

  useLayoutEffect(() => {
    setBodyColor(theme.colors['blue']);
  }, [setBodyColor, theme.colors]);

  return (
    <LayoutWrapper logoColor="marble">
      <ServicesLayout images={images} />
    </LayoutWrapper>
  );
};

export default ServicesPage;

export const query = graphql`
  query MyQuery {
    allImageSharp(
      filter: {
        fluid: { originalName: { in: ["natureza.jpg", "services.jpg"] } }
      }
    ) {
      edges {
        node {
          id
          gatsbyImageData
          fluid {
            originalName
          }
        }
      }
    }
  }
`;
