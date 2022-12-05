import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Menu from '../components/Menu';
import TitleSection from '../components/sections/TitleSection';
import TextSection from '../components/sections/TextSection';
import ImageTextSection from '../components/sections/ImageTextSection';
import MyFooter from '../components/Footer';
import InlineLogo from '../icons/InlineLogo';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header>
        <InlineLogo color="blue"/>
        <Menu color="blue"/>
      </Header>
      <TitleSection
        title={t('title')}
        background="marble"
        color="blue"
      />
      <ImageTextSection color="blue" body={t('body')} title={t('about').toUpperCase()} imagePath="/images/pilares.jpg"/>
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