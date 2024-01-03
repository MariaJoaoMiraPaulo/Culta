import { GatsbyImage } from 'gatsby-plugin-image';
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
        <GatsbyImage
          width={asset.node.file.details.image.width}
          height={asset.node.file.details.image.height}
          image={asset.node.gatsbyImageData}
          alt={asset.node.description || ''}
          placeholder="blurred"
          layout="constrained"
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
