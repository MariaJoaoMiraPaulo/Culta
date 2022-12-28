import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ServicesLayout from '../components/layouts/ServicesLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';

const ServicesPage = ({ data }) => {
  const images = getImagesMappedByName(data);

  return (
    <LayoutWrapper logoColor="blue">
      <ServicesLayout data={data.allContentfulServices.edges} images={images} />
    </LayoutWrapper>
  );
};

export default ServicesPage;

export const query = graphql`
  query MyQuery {
    allContentfulServices {
      edges {
        node {
          serviceName
          serviceDescription {
            serviceDescription
          }
        }
      }
    }
    allImageSharp(
      filter: { fluid: { originalName: { in: ["pilares.jpg", "what.jpg"] } } }
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
