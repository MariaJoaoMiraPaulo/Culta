import React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ServicesLayout from '../components/layouts/ServicesLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';
import BodyColor from '../components/BodyColor';

const ServicesPage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);

  return (
    <BodyColor color="blue">
      <LayoutWrapper logoColor="marble">
        <ServicesLayout images={images} />
      </LayoutWrapper>
    </BodyColor>
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
