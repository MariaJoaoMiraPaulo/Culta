import * as React from 'react';
import styled from 'styled-components';
import { Caption, BodySmall } from '../../styles/typographyComponents';
import { navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import GrainyEffectImage from '../effect/GrainyEffectImage';

const PostContainer = styled.div`
  margin: 20px;
  height: 450px;
  cursor: pointer;
  position: relative;

  &: hover {
    color: transparent;
    z-index: 1;
    text-shadow: 0 0 10px #efede4;
  }
`;

const PostContent = styled.div`
  color: ${props => props.theme.colors.marble};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  pointer-events: none;
`;

const Tags = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  span {
    line-height: 20px;
  }
`;

const BottomContent = styled.div`
  padding: 18px;
  span {
    font-size: 35px;
    line-height: 40px;
    max-width: 60%;
  }
`;

const DateStyle = styled.div`
  writing-mode: vertical-rl;
  transform: scale(-1, -1);
  padding-top: 10px;
`;

const Title = styled.div`
  margin-right: 25%;
  max-width: 100%;
`;

const PostCard = ({ title, image, tags, id, createdAt }) => {
  const jumpToContainer = () => navigate(`/${id}`);

  return (
    <PostContainer image={image} onClick={jumpToContainer}>
      <GrainyEffectImage>
        <GatsbyImage
          style={{ height: '100%', width: '100%' }}
          image={image}
          alt={title}
          placeholder="blurred"
          layout="constrained"
        />
      </GrainyEffectImage>
      <PostContent>
        <Tags>
          {tags.map(({ name }) => (
            <Caption key={name}>{name.toUpperCase()}</Caption>
          ))}
        </Tags>
        <BottomContent>
          <DateStyle>
            <BodySmall>{new Date(createdAt).toLocaleDateString()}</BodySmall>
          </DateStyle>
          <Title>
            <BodySmall>{title}</BodySmall>
          </Title>
        </BottomContent>
      </PostContent>
    </PostContainer>
  );
};

export default PostCard;
