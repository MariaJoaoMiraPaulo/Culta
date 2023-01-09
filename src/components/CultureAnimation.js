import React from 'react';
import styled from 'styled-components';
import { AnimationTitle } from '../styles/typographyComponents';
import { withTrans } from '../i18n/withTrans';
import { devices } from '../styles/devices';

const Animation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 3rem 4rem 6rem 4rem;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    margin: 5rem;
  }
`;

const CultureContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.marble};
  height: 60px;
  padding: 0 25px;
  text-align: left;

  @media ${devices.tablet} {
    padding: 0 1rem;
  }
`;

const AnimationContainer = styled.div`
  height: 65px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.blue};
  padding: 0;
  @media ${devices.tablet} {
    padding: 0 1rem;
  }
`;

const Sentences = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: 0;
  width: max-content;

  @media ${devices.tablet} {
    align-items: flex-end;
    width: auto;
  }

  li {
    line-height: 65px;
    padding-bottom: 1.5rem;
  }

  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;

  @keyframes change {
    10% {
      transform: translate3d(0, 0%, 0);
    }
    30% {
      transform: translate3d(0, -16.667%, 0);
    }
    45% {
      transform: translate3d(0, -33.334%, 0);
    }
    60% {
      transform: translate3d(0, -50.001%, 0);
    }
    75% {
      transform: translate3d(0, -66.668%, 0);
    }
    90% {
      transform: translate3d(0, -83.335%, 0);
    }
  }
`;

const CultureAnimation = ({ t }) => {
  return (
    <Animation>
      <AnimationContainer>
        <Sentences>
          <li>
            <AnimationTitle>{t('about.sentence1')}</AnimationTitle>
          </li>
          <li>
            <AnimationTitle>{t('about.sentence2')}</AnimationTitle>
          </li>
          <li>
            <AnimationTitle>{t('about.sentence3')}</AnimationTitle>
          </li>
          <li>
            <AnimationTitle>{t('about.sentence4')}</AnimationTitle>
          </li>
          <li>
            <AnimationTitle>{t('about.sentence5')}</AnimationTitle>
          </li>
          <li>
            <AnimationTitle>{t('about.sentence6')}</AnimationTitle>
          </li>
        </Sentences>
      </AnimationContainer>
      <CultureContainer>
        <AnimationTitle>{t('about.culture')}</AnimationTitle>
      </CultureContainer>
    </Animation>
  );
};

export default withTrans(CultureAnimation);
