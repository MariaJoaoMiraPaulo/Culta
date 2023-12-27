import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import theme from '../../styles/theme';
import { PostTitle, SmallerCaption } from '../../styles/typographyComponents';

import { GatsbyImage } from 'gatsby-plugin-image';
import { richTextToReactElements } from '../helpers/richTextConverter';
import ArrowIcon from '../../icons/ArrowIcon';
import { navigate } from 'gatsby';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.red};
  position: relative;
`;

const PostContent = styled.div`
  max-width: 100%;
  margin: 3rem 3rem 0 3rem;

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
  margin: 2rem 0rem;

  @media ${devices.tablet} {
    margin: 0rem 5.5rem;
  }

  span:first-child {
    margin-left: 0;
  }
`;

const PostContentBody = styled.div`
  margin: 2.5rem 0rem 0 0;

  @media ${devices.tablet} {
    margin: 3.5rem 5.5rem;
  }
`;

const BlogDateAndTopics = styled.div`
  display: flex;
  flex-direction: row;
`;

const BackToBlog = styled.div`
  svg {
    width: 30px;
    stroke-width: 5px;
    &: hover, &: active {
      filter: blur(2px);
    }
  }
 
  padding: 15px 0;
`;

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
          <BackToBlog onClick={() => navigate('/blog')}>
            <ArrowIcon left color="red" />
          </BackToBlog>
          <PostTitle>{title}</PostTitle>
          <BlogDateAndTopics>
            <SmallerCaption>
              {new Date(createdAt).toLocaleDateString()}
            </SmallerCaption>
            {tags && <SmallerCaption>|</SmallerCaption>}
            <SmallerCaption>
              {tags
                ?.map(({ name }) => name)
                .join(' ,')
                .toUpperCase()}
            </SmallerCaption>
          </BlogDateAndTopics>
        </PostContentHeader>
        <PostContentBody>
          {!!article.raw &&
            richTextToReactElements({ raw: article.raw }, assets)}
        </PostContentBody>
      </PostContent>
    </PostWrapper>
  );
};

export default Post;
