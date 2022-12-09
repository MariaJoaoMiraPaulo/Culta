import * as React from 'react';
import { graphql } from 'gatsby';
//import { useTranslation } from 'react-i18next';

const ServicesLayout = () => {
  //const { t } = useTranslation();
  return <></>;
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

export default ServicesLayout;
