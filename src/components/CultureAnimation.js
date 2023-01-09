import React from 'react';
import styled from 'styled-components';
import { SubTitle2 } from '../styles/typographyComponents';
import { withTrans } from '../i18n/withTrans';

const Animation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 5rem;
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
            <SubTitle2>{t('about.sentence1')}</SubTitle2>
          </li>
          <li>
            <SubTitle2>{t('about.sentence2')}</SubTitle2>
          </li>
          <li>
            <SubTitle2>{t('about.sentence3')}</SubTitle2>
          </li>
          <li>
            <SubTitle2>{t('about.sentence4')}</SubTitle2>
          </li>
          <li>
            <SubTitle2>{t('about.sentence5')}</SubTitle2>
          </li>
          <li>
            <SubTitle2>{t('about.sentence6')}</SubTitle2>
          </li>
        </Sentences>
      </AnimationContainer>
      <CultureContainer>
        <SubTitle2>{t('about.culture')}</SubTitle2>
      </CultureContainer>
    </Animation>
  );
};

export default withTrans(CultureAnimation);
