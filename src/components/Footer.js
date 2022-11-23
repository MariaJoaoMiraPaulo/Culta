import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { CopyrightText, FooterLink } from '../styles/typographyComponents';

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

const FirstRow = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuxLink = styled.a`
  font-size: 16px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  margin: 0rem;
  cursor: pointer;
  text-decoration: underline;
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: row;
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
          <FirstRow>
            <FooterLink>{t('contacts').toUpperCase()}</FooterLink>
            <AuxLink color="red">...</AuxLink>
          </FirstRow>
          {data.allContentfulCulta.edges.map(({ node }) => (
            <>
              <FooterLink>{node.email.toUpperCase()}</FooterLink>
              <FooterLink>{node.telefone}</FooterLink>
            </>    
          ))}
        </ColumnWrapper>
        <ColumnWrapper>
          <FirstRow>
            <FooterLink>{t('newsletter').toUpperCase()}</FooterLink>
            <AuxLink>{t('subscribe-newsletter')}</AuxLink>
          </FirstRow>
          <FooterLink>{t('linkedin').toUpperCase()}</FooterLink>
          <FooterLink>{t('instagram').toUpperCase()}</FooterLink>          
        </ColumnWrapper>
      </Columns>
      <Copyright>
        <CopyrightText>{t('copyright')}</CopyrightText>
        <CopyrightText>{t('politica')}</CopyrightText>
        <CopyrightText>{t('termos')}</CopyrightText>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
