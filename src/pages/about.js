import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Header from '../components/Header';
import TitleSection from '../components/sections/TitleSection';
import TextSection from '../components/sections/TextSection';
import MyFooter from '../components/Footer';

const Page = styled.div`
  background-image: url('/images/1.jpg');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
`;


const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Header color="blue"/>
      <TextSection color="blue" body={t('body')} title={t('about').toUpperCase()} percentage="5%" background="marble_transparency"/>
      <TitleSection
        title={t('title')}
        background="blue"
        color="marble"
      />
      <TextSection color="blue" body="cultura"/>
      <MyFooter />
    </Page>
    
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default AboutPage;