import React from 'react';
import styled from 'styled-components';

const AssetWrapper = styled.div`
  padding: 2rem 0;
`;

const Asset = ({ id, assets, realSize }) => {
  const asset = assets.edges.find(({ node }) => node.contentful_id === id);

  if (asset.node.file.contentType.match(/image\//)) {
    return (
      <AssetWrapper>
        <img
          src={asset.node.url}
          width={realSize ? asset.node.file.details.image.width : '100%'}
          height={realSize ? asset.node.file.details.image.height : 'auto'}
          alt={asset.node.description}
        />
      </AssetWrapper>
    );
  }

  if (asset.node.file.contentType.match(/video\//)) {
    return (
      <AssetWrapper>
        <video controls src={asset.node.url} width="100%" />
      </AssetWrapper>
    );
  }

  return null;
};

export default Asset;
