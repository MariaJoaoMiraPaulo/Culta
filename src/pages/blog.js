import { graphql } from 'gatsby';
import React from 'react';
import BlogLayout from '../components/layouts/BlogLayout';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import { SEO } from '../components/SEO';
import metadata from '../data/metadata';

const BlogPage = ({ data }) => {
  const getFirstBlogPostImage = () => {
    const postsArray = data.allContentfulBlogPost.edges;
    if (postsArray.length === 0) return null;
    return data.allContentfulBlogPost.edges[0].node.backgroundImage
      .gatsbyImageData.images.fallback.src;
  };

  return (
    <>
      <SEO
        title={metadata.blog.title}
        description={metadata.blog.description}
        pathname="blog"
        fullImageUrl={getFirstBlogPostImage()}
      />
      <LayoutWrapper logoColor="red">
        <BlogLayout data={data.allContentfulBlogPost.edges} />
      </LayoutWrapper>
    </>
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
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
