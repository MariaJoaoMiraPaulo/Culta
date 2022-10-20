import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Section from '../components/Section';
import { Subtitle, Body } from '../styles/typographyComponents';
import { useTranslation } from 'react-i18next';

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
      <Section title background="red" color="marble">
        {t('homepage.title')}
      </Section>
      <Section>
        <Subtitle> {t('homepage.about.title')}</Subtitle>
        <Body>{t('homepage.about.body')}</Body>
      </Section>
      <Section inverted>
        <Body>Comunicação Gestão Produção</Body>
        <Subtitle>{t('homepage.what.title')}</Subtitle>
      </Section>
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
