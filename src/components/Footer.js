import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Copyright } from '../styles/typographyComponents';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.marble};
  background-color: ${({ theme }) => theme.colors.red};
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  align-items: center;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  align-items: center;
`;

const FooterLink = styled.a`
  cursor: pointer;
  font-size: ${({ size }) => size || '30px'};
  line-height: 40px;
  text-align: center;
`;

const Footer = () => {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulCulta {
        edges {
          node {
            email
            morada
            telefone
          }
        }
      }
    }
  `,
  );
  

  return (
    <FooterWrapper>
      <Columns>
        <ColumnWrapper>
          <FooterLink>{t('contacts').toUpperCase()}</FooterLink>
            {data.allContentfulCulta.edges.map(({ node }) => (
              <>
              <CenterWrapper>
                <FooterLink>{node.email.toUpperCase()}</FooterLink>
                <FooterLink>{node.telefone}</FooterLink>
              </CenterWrapper>
              <FooterLink size='20px'>{node.morada}</FooterLink>
              </>    
            ))}
        </ColumnWrapper>
        <ColumnWrapper>
          <FooterLink>{t('newsletter').toUpperCase()}</FooterLink>
          <CenterWrapper>
            <FooterLink>{t('weekly-news').toUpperCase()}</FooterLink>
            <FooterLink>{t('new-work').toUpperCase()}</FooterLink>
          </CenterWrapper>
          <FooterLink size='20px'>{t('subscribe-newsletter')}</FooterLink>
        </ColumnWrapper>
      </Columns>
      <Copyright>{t('copyright')}</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
