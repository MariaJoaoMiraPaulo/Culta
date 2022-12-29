import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ServicesLayout from '../components/layouts/ServicesLayout';

const ServicesPage = ({ data }) => {
  return (
    <LayoutWrapper logoColor="blue">
      <ServicesLayout data={data.allContentfulServices.edges} />
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
  }
`;
