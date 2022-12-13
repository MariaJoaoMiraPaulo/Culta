import React from 'react';
import styled from 'styled-components';
import { SmallTitle, Body } from '../styles/typographyComponents';

const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const CultureContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.marble};
  height: 60px;
  padding: 0 1rem;
`;

const AnimationContainer = styled.div`
  height: 65px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.blue};
  padding: 0 1rem;
`;

const Sentences = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;

  li {
    line-height: 65px;
  }

  -webkit-animation-name: change;
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;

  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;

  @keyframes change {
    0%,
    15%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    0%,
    30%,
    100% {
      transform: translate3d(0, -16%, 0);
    }
    0%,
    45%,
    100% {
      transform: translate3d(0, -32.5%, 0);
    }
    0%,
    60%,
    100% {
      transform: translate3d(0, -48.5%, 0);
    }
    0%,
    75%,
    100% {
      transform: translate3d(0, -66%, 0);
    }
    0%,
    90%,
    100% {
      transform: translate3d(0, -82.5%, 0);
    }
  }
`;

const CultureAnimation = () => {
  return (
    <Animation>
      <AnimationContainer>
        <Sentences>
          <li>
            <SmallTitle>somos</SmallTitle>
          </li>
          <li>
            <SmallTitle>comunicar a</SmallTitle>
          </li>
          <li>
            <SmallTitle>aproximar a sociedade da</SmallTitle>
          </li>
          <li>
            <SmallTitle>impacto social através da</SmallTitle>
          </li>
          <li>
            <SmallTitle>criar e inovar a</SmallTitle>
          </li>
          <li>
            <SmallTitle>dar voz à</SmallTitle>
          </li>
        </Sentences>
      </AnimationContainer>
      <CultureContainer>
        <SmallTitle>Cultura</SmallTitle>
      </CultureContainer>
    </Animation>
  );
};

export default CultureAnimation;
