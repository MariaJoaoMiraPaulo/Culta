import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../sections/TitleSection';
import ImageSection from '../sections/ImageSection';
import TextSection from '../sections/TextSection';

const HomeLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleSection
        title={t('homepage.title')}
        background="red"
        color="marble"
        paddingBottom="3.5rem"
      />
      <TextSection
        body={t('homepage.about.body')}
        linksTo=""
        background="red"
        color="marble"
        centered="true"
        percentage="20%"
      />
      <ImageSection
        imagePath="/images/2.jpg"
        title={t('homepage.what.title')}
        linkTo={'/about'}
      />
      <ImageSection
        imagePath="/images/3.jpg"
        title={t('homepage.proud.title')}
        linkTo={'/blog'}
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

export default HomeLayout;
