import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import MyFooter from '../components/Footer';
import { useTranslation } from 'react-i18next';
import TitleSection from '../components/sections/TitleSection';
import ImageSection from '../components/sections/ImageSection';
import {
  TextSection,
  CenteredSection,
} from '../components/sections/TextSection';
import Footer from '../components/Footer';

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/1.jpg');
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Banner>
      <Header>
        <Logo orientation="v" />
        <Menu />
      </Header>
      <TitleSection
        title={t('homepage.title')}
        background="red"
        color="marble"
      />
      <CenteredSection body={t('homepage.about.body')} linksTo="" />
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
      <MyFooter />
    </Banner>
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

export default IndexPage;
