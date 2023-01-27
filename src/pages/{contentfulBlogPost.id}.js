import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import PostLayout from '../components/layouts/PostLayout';
import BodyColor from '../components/BodyColor';

const Post = ({ data }) => {
  if (!data.contentfulBlogPost) {
    return navigate('/404');
  }

  return (
    <BodyColor>
      <LayoutWrapper logoColor="red">
        <PostLayout
          post={data.contentfulBlogPost}
          assets={data.allContentfulAsset}
        />
      </LayoutWrapper>
    </BodyColor>
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
        file {
          url
        }
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
