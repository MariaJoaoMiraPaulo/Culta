import * as React from 'react';
import { graphql } from 'gatsby';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import BlogLayout from '../components/layouts/BlogLayout';

const BlogPage = () => {
  return (
    <LayoutWrapper>
      <BlogLayout />
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

export default BlogPage;
