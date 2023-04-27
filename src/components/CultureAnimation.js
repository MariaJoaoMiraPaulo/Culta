import React from 'react';
import styled from 'styled-components';
import { AnimationTitle } from '../styles/typographyComponents';
import { withTrans } from '../i18n/withTrans';
import { devices } from '../styles/devices';

const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 1rem 6rem 1rem;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    margin: 5rem;
  }
`;

const CultureContainer = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  height: 40px;
  text-align: left;
  display: flex;
  align-items: center;

  @media ${devices.mobileM} {
    height: 60px;
  }

  @media ${devices.laptop} {
    height: 60px;
  }
`;

const AnimationContainer = styled.div`
  height: 65px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.blue};
  padding: 0;
  @media ${devices.tablet} {
    padding: 0 0.5rem;
  }
`;

const Sentences = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  animation-name: translation;
  animation-duration: 36s;
  animation-iteration-count: infinite;

  @keyframes translation {
    0% {
      transform: translate(0, -0%);
    }
    5% {
      transform: translate(0, -5.25%);
    }
    10% {
      transform: translate(0, -10.5%);
    }
    15% {
      transform: translate(0, -15.75%);
    }
    20% {
      transform: translate(0, -21%);
    }
    25% {
      transform: translate(0, -26.25%);
    }
    30% {
      transform: translate(0, -31.5%);
    }
    35% {
      transform: translate(0, -36.75%);
    }
    40% {
      transform: translate(0, -42%);
    }
    45% {
      transform: translate(0, -47.25%);
    }
    50% {
      transform: translate(0, -52.5%);
    }
    55% {
      transform: translate(0, -57.75%);
    }
    60% {
      transform: translate(0, -63%);
    }
    65% {
      transform: translate(0, -68.25%);
    }
    70% {
      transform: translate(0, -73.5%);
    }
    75% {
      transform: translate(0, -78.75%);
    }
    80% {
      transform: translate(0, -84%);
    }
    85% {
      transform: translate(0, -89.25%);
    }
    90% {
      transform: translate(0, -94.5%);
    }
    95% {
      transform: translate(0, -99.75%);
    }
    100% {
      transform: translate(0, -100%);
    }
  }
`;

const CultureAnimation = ({ t }) => {
  return (
    <Animation>
      <AnimationContainer>
        <Sentences>
          <li>
            <AnimationTitle>
              <div style={{ height: '65px' }} />
            </AnimationTitle>
          </li>
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
