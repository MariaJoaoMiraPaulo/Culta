import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import TitleSection from '../components/sections/TitleSection';
import { TitleBold } from '../styles/typographyComponents';
import { TextSection } from '../components/sections/TextSection';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <TitleBold color="red" size="40px">{t('about').toUpperCase()}</TitleBold>
      <TextSection body={t('body')}/>
      <TitleSection
        title={t('title')}
        background="red"
        color="marble"
        size="60px"
      />
    </div>
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