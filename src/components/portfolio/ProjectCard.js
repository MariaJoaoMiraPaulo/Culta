import * as React from 'react';
import styled from 'styled-components';
import { BodySmall } from '../../styles/typographyComponents';
import { navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import GrainyEffectImage from '../effect/GrainyEffectImage';
import { devices } from '../../styles/devices';

const ProjectContainer = styled.div`
  margin: 20px;
  height: 450px;
  cursor: pointer;
  position: relative;
  @media ${devices.tablet} {
    &: hover {
      span {
        color: transparent;
        z-index: 1;
        text-shadow: 0 0 ${({ radius }) => radius || '10px'}
          ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
      }
    }
  }
`;

const ProjectContent = styled.div`
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
  overflow: hidden;
  span {
    font-size: 28px;
    line-height: 40px;
    max-width: 60%;
    @media ${devices.tablet} {
      font-size: 32px;
    }
  }
`;

const Title = styled.div`
  margin-right: 5%;
  max-width: 100%;
  text-wrap: balance;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${devices.tablet} {
    margin-right: 25%;
    display: block;
  }
`;

const ProjectCard = ({ title, image, linkTitle }) => {
  const jumpToContainer = () => navigate(`/${linkTitle}`);

  return (
    <ProjectContainer image={image} onClick={jumpToContainer}>
      <GrainyEffectImage>
        <GatsbyImage
          style={{ height: '100%', width: '100%' }}
          image={image}
          alt={title}
          placeholder="blurred"
          layout="constrained"
        />
      </GrainyEffectImage>
      <ProjectContent>
        <Tags />
        <BottomContent>
          <Title>
            <BodySmall>{title}</BodySmall>
          </Title>
        </BottomContent>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectCard;
