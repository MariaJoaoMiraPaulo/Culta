import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import AboutLayout from '../components/layouts/AboutLayout';

const AboutPage = () => {
  return (
    <LayoutWrapper logoColor="blue">
      <AboutLayout />
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

export default AboutPage;
