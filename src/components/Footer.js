import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { CopyrightText, FooterText } from '../styles/typographyComponents';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.marble};
  background-color: ${({ theme }) => theme.colors.red};
`;

const Table = styled.table`
  padding: 4rem;
  width: 100%;
`;

const Td = styled.td`
  text-align: center;
  padding-bottom: 2rem;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuxLink = styled.a`
  font-size: 16px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  margin: 0rem;
  cursor: pointer;

  &: hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterLink = styled(FooterText)`
  cursor: pointer;

  &: hover {
    text-shadow:  0 0 10px ${({ theme }) => theme.colors.marble};
  }
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
  `);

  return (
    <FooterWrapper>
      <Table>
        <tbody>
          <tr>
            <th><FooterText>{t('contacts').toUpperCase()}</FooterText></th>
            <th><FooterText>{t('newsletter').toUpperCase()}</FooterText></th> 
          </tr>
          <tr>
            <Td></Td>
            <Td><AuxLink>{t('subscribe')}</AuxLink></Td> 
          </tr>
          <tr>
            <td>{data.allContentfulCulta.edges.map(({ node }, index) => (
              <ColumnWrapper key={index}>
                <FooterLink>{node.telefone}</FooterLink>
                <FooterLink>{node.email.toUpperCase()}</FooterLink>
              </ColumnWrapper>
            ))}</td>
            <td>
              <ColumnWrapper>
                <FooterLink>{t('linkedin').toUpperCase()}</FooterLink>
                <FooterLink>{t('instagram').toUpperCase()}</FooterLink>
              </ColumnWrapper>
            </td>
          </tr>
        </tbody>
      </Table>
      <Copyright>
        <CopyrightText>{t('copyright')}</CopyrightText>
        <AuxLink><CopyrightText>{t('policy')}</CopyrightText></AuxLink>
        <AuxLink><CopyrightText>{t('terms')}</CopyrightText></AuxLink>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
