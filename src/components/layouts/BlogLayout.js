import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import PostCard from '../blog/PostCard';

const BlogPageLayout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  min-height: 90vh;
  margin-bottom: 2.5rem;
  grid-gap: 20px;
  padding: 20px;

  @media ${devices.tablet} {
    grid-template-columns: 49% 49%;
  }
  @media ${devices.desktop} {
    grid-template-columns: 24% 24% 24% 24%;
  }
`;

const BlogLayout = ({ data }) => {
  return (
    <BlogPageLayout>
      {data.map(({ node }) => (
        <PostCard
          key={node.id}
          title={node.title}
          linkTitle={node.linkTitle}
          image={node.backgroundImage.gatsbyImageData}
          tags={node.tags}
          id={node.id}
          createdAt={node.createdAt}
        />
      ))}
    </BlogPageLayout>
  );
};

export default BlogLayout;
