import { graphql } from 'gatsby';
import React from 'react';
import BlogLayout from '../components/layouts/BlogLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';

import BodyColor from '../components/BodyColor';

const BlogPage = ({ data }) => {
  return (
    <BodyColor>
      <LayoutWrapper logoColor="red">
        <BlogLayout data={data.allContentfulBlogPost.edges} />
      </LayoutWrapper>
    </BodyColor>
  );
};

export default BlogPage;

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
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
