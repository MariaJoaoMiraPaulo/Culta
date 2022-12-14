import React from 'react';
import styled from 'styled-components';
import { SmallTitle } from '../styles/typographyComponents';
import { withTrans } from '../i18n/withTrans';

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
/* https://www.sliderrevolution.com/resources/css-text-animation/*/
const Sentences = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;

  li {
    line-height: 65px;
  }

  animation-name: change;
  animation-duration: 20s;
  animation-iteration-count: infinite;

  @keyframes change {
    0%,
    16.5%,
    100% {
      transform: translate3d(0, 1%, 0);
    }
    0%,
    33%,
    100% {
      transform: translate3d(0, -16%, 0);
    }
    0%,
    49.5%,
    100% {
      transform: translate3d(0, -32.5%, 0);
    }
    0%,
    66%,
    100% {
      transform: translate3d(0, -48.5%, 0);
    }
    0%,
    82.5%,
    100% {
      transform: translate3d(0, -66%, 0);
    }
    0%,
    99%,
    100% {
      transform: translate3d(0, -82.5%, 0);
    }
  }
`;

const CultureAnimation = ({ t }) => {
  return (
    <Animation>
      <AnimationContainer>
        <Sentences>
          <li>
            <SmallTitle>{t('about.sentence1')}</SmallTitle>
          </li>
          <li>
            <SmallTitle>{t('about.sentence2')}</SmallTitle>
          </li>
          <li>
            <SmallTitle>{t('about.sentence3')}</SmallTitle>
          </li>
          <li>
            <SmallTitle>{t('about.sentence4')}</SmallTitle>
          </li>
          <li>
            <SmallTitle>{t('about.sentence5')}</SmallTitle>
          </li>
          <li>
            <SmallTitle>{t('about.sentence6')}</SmallTitle>
          </li>
        </Sentences>
      </AnimationContainer>
      <CultureContainer>
        <SmallTitle>{t('about.culture')}</SmallTitle>
      </CultureContainer>
    </Animation>
  );
};

export default withTrans(CultureAnimation);
