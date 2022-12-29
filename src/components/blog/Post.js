import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import theme from '../../styles/theme';
import {
  Body,
  BodyBold,
  BodyTitle,
  CopyrightText,
  BodyUnderlined,
  SmallTitle,
} from '../../styles/typographyComponents';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Asset from './Asset';
import { GatsbyImage } from 'gatsby-plugin-image';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.red};
  position: relative;
`;

const PostContent = styled.div`
  max-width: 100%;
  margin: 3rem;

  @media ${devices.tablet} {
    width: 70%;
  }
`;

const PostContentImage = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 2rem;
`;

const PostContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

const BlogDateAndTopics = styled.div`
  writing-mode: horizontal-tb;
  transform: scale(1, 1);

  display: flex;
  flex-direction: column;

  span {
    margin: 0;
    text-align: start;
  }

  @media ${devices.tablet} {
    writing-mode: vertical-rl;
    transform: scale(-1, -1);
    text-align: end;
    padding-left: 20px;
  }
`;

const PostContentBody = styled.div`
  margin: 2rem 0rem;

  @media ${devices.tablet} {
    margin: 2rem 5.5rem;
  }
`;

const PaddingParagraph = styled.div`
  padding-bottom: 2rem;
`;

const getCustomOptions = assets => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <BodyBold>{text}</BodyBold>,
      [MARKS.UNDERLINE]: text => <BodyUnderlined>{text}</BodyUnderlined>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <PaddingParagraph>
          <BodyTitle>{children}</BodyTitle>
        </PaddingParagraph>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <PaddingParagraph>
          <Body>{children}</Body>
        </PaddingParagraph>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return <Asset id={node.data.target.sys.id} assets={assets} />;
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
      <PostContentImage>
        <GatsbyImage
          style={{ height: '100%', width: '100%' }}
          image={backgroundImage.gatsbyImageData}
          alt={backgroundImage.description}
          placeholder="blurred"
          layout="constrained"
        />
      </PostContentImage>
      <PostContent>
        <PostContentHeader>
          <BlogDateAndTopics>
            <CopyrightText margin="2rem 0" lineHeight="30">
              {tags
                .map(({ name }) => name)
                .join(' ,')
                .toUpperCase()}
            </CopyrightText>
            <Body>{new Date(createdAt).toLocaleDateString()}</Body>
          </BlogDateAndTopics>
          <SmallTitle>{title}</SmallTitle>
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
