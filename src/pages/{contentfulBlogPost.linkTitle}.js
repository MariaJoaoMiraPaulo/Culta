import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import PostLayout from '../components/layouts/PostLayout';
import { SEO } from '../components/SEO';

const Post = ({ data }) => {
  const post = React.useMemo(() => {
    return data.contentfulBlogPost;
  }, [data.contentfulBlogPost.id]);

  if (!data.contentfulBlogPost) {
    return navigate('/404');
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description.description}
        pathname={post.id}
        fullImageUrl={post.backgroundImage.publicUrl}
      />
      <LayoutWrapper logoColor="red">
        <PostLayout post={post} assets={data.allContentfulAsset} />
      </LayoutWrapper>
    </>
  );
};

export default Post;

export const query = graphql`
  query BlogPost($linkTitle: String!) {
    contentfulBlogPost(linkTitle: { eq: $linkTitle }) {
      id
      createdAt
      tags {
        name
      }
      linkTitle
      title
      description {
        description
      }
      article {
        raw
      }
      backgroundImage {
        description
        gatsbyImageData(layout: CONSTRAINED)
        publicUrl
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
