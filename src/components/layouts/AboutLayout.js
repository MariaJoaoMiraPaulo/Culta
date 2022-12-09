import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import TitleSection from '../sections/TitleSection';
import ImageSection from '../sections/ImageSection';
import TextSection from '../sections/TextSection';
import ImageTextSection from '../sections/ImageTextSection';

const AboutLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <TitleSection
        title={t('title')}
        background="marble"
        color="blue"
      />
      <ImageTextSection color="blue" body={t('body')} title={t('about').toUpperCase()} imagePath="/images/pilares.jpg"/>
      <TextSection color="blue" body="cultura"/>
      <ImageSection
        imagePath="/images/what.jpg"
        title={t('services')}
        linkTo={'/services'}
      />
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

export default AboutLayout;
