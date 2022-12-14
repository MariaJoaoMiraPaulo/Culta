import React from 'react';
import styled from 'styled-components';

const PostAssetWrapper = styled.div`
  padding: 2rem 0;
`;

const PostAsset = ({ id, assets }) => {
  const asset = assets.edges.find(({ node }) => node.contentful_id === id);

  if (asset.node.file.contentType.match(/image\//)) {
    return (
      <PostAssetWrapper>
        <img
          src={asset.node.url}
          width={asset.node.file.details.image.width}
          height={asset.node.file.details.image.height}
          alt={asset.node.description}
        />
      </PostAssetWrapper>
    );
  }

  if (asset.node.file.contentType.match(/video\//)) {
    return (
      <PostAssetWrapper>
        <video controls src={asset.node.url} width="100%" />
      </PostAssetWrapper>
    );
  }

  return null;
};

export default PostAsset;
