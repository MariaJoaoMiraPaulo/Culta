import { graphql } from 'gatsby';
import * as React from 'react';
import BlogLayout from '../components/layouts/BlogLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';

const BlogPage = ({ data }) => {
  return (
    <LayoutWrapper>
      <BlogLayout data={data.allContentfulBlogPost.edges} />
    </LayoutWrapper>
  );
};

export default BlogPage;

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          createdAt
          article {
            raw
          }
          tags {
            name
          }
          backgroundImage {
            file {
              url
            }
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
