import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import PostLayout from '../components/layouts/PostLayout';
import { Seo } from '../components/Seo';
import PreviousNextLinks from '../components/previousAndNext/PreviousNextLinks';
import { withTrans } from '../i18n/withTrans';

const Post = ({ t, data }) => {
  const post = React.useMemo(() => {
    return data.contentfulBlogPost;
  }, [data.contentfulBlogPost]);

  if (!data.contentfulBlogPost) {
    return navigate('/404');
  }

  const jumpTo = linkTitle => {
    return navigate(`/${linkTitle}`);
  };

  return (
    <>
      <Seo
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.description}
        pathname={data.contentfulBlogPost.id}
        fullImageUrl={
          data.contentfulBlogPost?.backgroundImage?.gatsbyImageData?.images
            .fallback?.src
        }
      />
      <LayoutWrapper color="red">
        <PostLayout post={post} assets={data.allContentfulAsset} />
        <PreviousNextLinks
          data={data.allContentfulBlogPost.edges}
          currentDataItemId={data.contentfulBlogPost.id}
          jumpTo={jumpTo}
          next={t('blog.links.next')}
          previous={t('blog.links.previous')}
        />
      </LayoutWrapper>
    </>
  );
};

export default withTrans(Post);

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
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          linkTitle
          title
          backgroundImage {
            description
            gatsbyImageData(layout: CONSTRAINED)
            publicUrl
          }
        }
      }
    }
  }
`;
