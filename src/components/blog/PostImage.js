import React from 'react';
import styled from 'styled-components';

const PostImageWrapper = styled.div`
  padding: 2rem 0;
`;

const PostImage = ({ id, assets }) => {
  const asset = assets.edges.find(({ node }) => node.contentful_id === id);

  return (
    <PostImageWrapper>
      <img src={asset.node.url} />
    </PostImageWrapper>
  );
};

export default PostImage;
