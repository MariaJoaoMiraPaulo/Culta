import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import TitleSection from '../components/sections/TitleSection';
import { TextSection } from '../components/sections/TextSection';
import MyFooter from '../components/Footer';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <TextSection color="blue" body={t('body')} title={t('about').toUpperCase()}/>
      <TitleSection
        title={t('title')}
        background="red"
        color="marble"
        smaller={true}
      />
      <TextSection color="blue" body="cultura"/>
      <MyFooter />
    </>
    
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