import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import PostLayout from '../components/layouts/PostLayout';
import { SEO } from '../components/SEO';

const Post = ({ data }) => {
  if (!data.contentfulBlogPost) {
    return navigate('/404');
  }

  return (
    <>
      <SEO
        title={data.contentfulBlogPost.title}
        fullImageUrl={
          data.contentfulBlogPost.backgroundImage.gatsbyImageData.images
            .fallback.src
        }
        pathname={data.contentfulBlogPost.id}
      />
      <LayoutWrapper logoColor="red">
        <PostLayout
          post={data.contentfulBlogPost}
          assets={data.allContentfulAsset}
        />
      </LayoutWrapper>
    </>
  );
};

export default Post;

export const query = graphql`
  query BlogPost($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      createdAt
      tags {
        name
      }
      title
      article {
        raw
      }
      backgroundImage {
        description
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    allContentfulAsset {
      edges {
        node {
          url
          file {
            contentType
            details {
              image {
                height
                width
              }
            }
          }
          contentful_id
          description
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`;
