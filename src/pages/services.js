import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ServicesLayout from '../components/layouts/ServicesLayout';

const ServicesPage = () => {
  return (
    <LayoutWrapper>
      <ServicesLayout />
    </LayoutWrapper>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default ServicesPage;
