import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import HomeLayout from '../components/layouts/HomeLayout';

const HomePage = () => {
  return (
    <LayoutWrapper inline={false} isHomepage >
      <HomeLayout />
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

export default HomePage;
