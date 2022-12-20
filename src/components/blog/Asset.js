import React from 'react';
import styled from 'styled-components';

const AssetWrapper = styled.div`
  padding: 2rem 0;
`;

const FixedImg = styled.img`
  max-width: 100%;
`;

const Asset = ({ id, assets, realSize = false }) => {
  const asset = assets.edges.find(({ node }) => node.contentful_id === id);

  if (asset.node.file.contentType.match(/image\//)) {
    return (
      <AssetWrapper>
        <div onContextMenu={e => e.preventDefault()}>
          {realSize ? (
            <img
              src={asset.node.url}
              width={asset.node.file.details.image.width}
              height={asset.node.file.details.image.height}
              alt={asset.node.description}
              oncontextmenu="return false;"
            />
          ) : (
            <FixedImg
              src={asset.node.url}
              alt={asset.node.description}
              oncontextmenu="return false;"
            ></FixedImg>
          )}
        </div>
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
