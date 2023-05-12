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
  animation-duration: 12s;
  animation-iteration-count: infinite;

  @keyframes translation {
    0% {
      transform: translate(0, -6%);
    }
    14% {
      transform: translate(0, -14.25%);
    }
    28% {
      transform: translate(0, -28.5%);
    }
    42% {
      transform: translate(0, -43%);
    }
    56% {
      transform: translate(0, -57.25%);
    }
    70% {
      transform: translate(0, -71.25%);
    }
    84% {
      transform: translate(0, -85.5%);
    }
    100% {
      transform: translate(0, -99.5%);
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
        </Sentences>
      </AnimationContainer>
      <CultureContainer>
        <AnimationTitle>{t('about.culture')}</AnimationTitle>
      </CultureContainer>
    </Animation>
  );
};

export default withTrans(CultureAnimation);
