import * as React from 'react';
import styled from 'styled-components';
import { CopyrightText, FooterText } from '../../styles/typographyComponents';
import { navigate } from 'gatsby';

const PostContainer = styled.div`
  background-image: url(${props => props.image || '/images/1.jpg'});
  background-size: cover;
  background-position: center center;
  margin: 10px;
  padding: 20px;
  height: 450px;
  cursor: pointer;
`;

const PostContent = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.marble};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tags = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  span {
    line-height: 20px;
  }
`;

const BottomContent = styled.div`
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
`;

const PostCard = ({ title, image, tags, id, createdAt }) => {
  return (
    <PostContainer image={image} onClick={() => navigate(`/${id}`)}>
      <PostContent>
        <Tags>
          {tags.map(({ name }) => (
            <CopyrightText>{name.toUpperCase()}</CopyrightText>
          ))}
        </Tags>
        <BottomContent>
          <DateStyle>
            <FooterText>{new Date(createdAt).toLocaleDateString()}</FooterText>
          </DateStyle>
          <Title>
            <FooterText>{title}</FooterText>
          </Title>
        </BottomContent>
      </PostContent>
    </PostContainer>
  );
};

export default PostCard;
