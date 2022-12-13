import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import theme from '../../styles/theme';
import {
  Body,
  CopyrightText,
  SmallTitle,
} from '../../styles/typographyComponents';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import PostAsset from './PostAsset';

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${theme.colors.red};
`;

const PostContent = styled.div`
  width: 100%;

  @media ${devices.tablet} {
    width: 60%;
  }
`;

const PostContentImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.image || '/images/1.jpg'});
  background-size: cover;
  background-position: center center;
  margin-bottom: 2rem;
`;

const PostContentHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const BlogDate = styled.div`
  writing-mode: vertical-rl;
  transform: scale(-1, -1);
  padding-left: 20px;
`;

const PostContentBody = styled.div`
  padding-top: 2rem;
`;

const PaddingParagraph = styled.div`
  padding: 1rem 0;
`;

const getCustomOptions = assets => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Body>{text}</Body>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Body>{children}</Body>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return <PostAsset id={node.data.target.sys.id} assets={assets} />;
      },
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [
          ...children,
          index > 0 && <br key={index} /> && <PaddingParagraph />,
          textSegment,
        ];
      }, []);
    },
  };
  return options;
};

const Post = ({ post, assets }) => {
  const { article, title, tags, createdAt, backgroundImage } = post;

  return (
    <PostWrapper>
      <PostContent>
        <PostContentImage image={backgroundImage.file.url} />
        <PostContentHeader>
          <BlogDate>
            <Body>{new Date(createdAt).toLocaleDateString()}</Body>
          </BlogDate>
          <div>
            <SmallTitle>{title}</SmallTitle>
            <CopyrightText margin="2rem 0" lineHeight="30">
              {tags
                .map(({ name }) => name)
                .join(' ,')
                .toUpperCase()}
            </CopyrightText>
          </div>
        </PostContentHeader>
        <PostContentBody>
          {!!article.raw &&
            renderRichText({ raw: article.raw }, getCustomOptions(assets))}
        </PostContentBody>
      </PostContent>
    </PostWrapper>
  );
};

export default Post;
