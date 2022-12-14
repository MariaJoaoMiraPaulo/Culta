import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import PostCard from '../blog/PostCard';

const BlogPageLayout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 25px;
  min-height: 90vh;
  @media ${devices.tablet} {
    grid-template-columns: 50% 50%;
  }
  @media ${devices.desktop} {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

const BlogLayout = ({ data }) => {
  return (
    <BlogPageLayout>
      {data.map(({ node }) => (
        <PostCard
          title={node.title}
          image={node.backgroundImage.file.url}
          tags={node.tags}
          id={node.id}
          createdAt={node.createdAt}
        />
      ))}
    </BlogPageLayout>
  );
};

export default BlogLayout;
