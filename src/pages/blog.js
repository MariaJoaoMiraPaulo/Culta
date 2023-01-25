import { graphql } from 'gatsby';
import React, { useContext, useLayoutEffect } from 'react';
import BlogLayout from '../components/layouts/BlogLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import { BodyColorContext } from '../Provider';
import { useTheme } from 'styled-components';

const BlogPage = ({ data }) => {
  const { setBodyColor } = useContext(BodyColorContext);
  const theme = useTheme();

  useLayoutEffect(() => {
    setBodyColor(theme.colors['marble']);
  }, [setBodyColor, theme.colors]);

  return (
    <LayoutWrapper logoColor="red">
      <BlogLayout data={data.allContentfulBlogPost.edges} />
    </LayoutWrapper>
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
