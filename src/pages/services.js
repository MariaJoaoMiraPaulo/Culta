import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ServicesLayout from '../components/layouts/ServicesLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';

const ServicesPage = ({ data }) => {
  const images = getImagesMappedByName(data);

  return (
    <LayoutWrapper logoColor="red">
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
