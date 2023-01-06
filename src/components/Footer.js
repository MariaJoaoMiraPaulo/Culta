import * as React from 'react';
import styled from 'styled-components';
import { Caption, BodySmall } from '../styles/typographyComponents';
import culta from '../data/culta';
import { withTrans } from '../i18n/withTrans';
import { devices } from '../styles/devices';
import { Link } from 'gatsby';
import NewsletterForm from './forms/NewsletterForm';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.marble};
  background-color: ${({ theme }) => theme.colors.red};
  z-index: 9;
`;

const Table = styled.table`
  margin: 4rem;
  width: 100%;
`;

const Td = styled.td`
  text-align: center;
  padding-bottom: 2rem;
  width: 50%;
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
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: row;

    span {
      padding-left: 1rem;
    }
  }
`;

const FooterLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: inherit;

  &: hover {
    color: transparent;
    text-shadow: 0 0 ${({ radius }) => radius || '10px'}
      ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
  }
`;

const FooterAnchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: inherit;

  &: hover {
    color: transparent;
    text-shadow: 0 0 ${({ radius }) => radius || '10px'}
      ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
  }
`;

const Footer = ({ t }) => {
  return (
    <FooterWrapper>
      <Table>
        <tbody>
          <tr>
            <th>
              <FooterLink to="/contact">
                <BodySmall>{t('footer.contacts').toUpperCase()}</BodySmall>
              </FooterLink>
            </th>
            <th>
              <BodySmall>{t('footer.newsletter').toUpperCase()}</BodySmall>
            </th>
          </tr>
          <tr>
            <Td></Td>
            <Td>
              <NewsletterForm />
            </Td>
          </tr>
          <tr>
            <td>
              <ColumnWrapper>
                <FooterAnchor href="tel:+351912681139">
                  <BodySmall>{culta.phoneNumber}</BodySmall>
                </FooterAnchor>
                <FooterAnchor href="mailto:geral@culta.pt">
                  <BodySmall>{culta.email.toUpperCase()}</BodySmall>
                </FooterAnchor>
              </ColumnWrapper>
            </td>
            <td>
              <ColumnWrapper>
                <FooterAnchor
                  href="https://www.linkedin.com/company/aculta/?viewAsMember=true"
                  target="_blank"
                >
                  <BodySmall>{t('footer.linkedin').toUpperCase()}</BodySmall>
                </FooterAnchor>
                <FooterAnchor
                  href="https://www.instagram.com/cultapt/"
                  target="_blank"
                >
                  <BodySmall>{t('footer.instagram').toUpperCase()}</BodySmall>
                </FooterAnchor>
              </ColumnWrapper>
            </td>
          </tr>
        </tbody>
      </Table>
      <Copyright>
        <Caption>{t('footer.copyright')}</Caption>
        <AuxLink>
          <Caption>{t('footer.policy')}</Caption>
        </AuxLink>
        <AuxLink>
          <Caption>{t('footer.terms')}</Caption>
        </AuxLink>
        <AuxLink>
          <Caption>{t('footer.license')}</Caption>
        </AuxLink>
      </Copyright>
    </FooterWrapper>
  );
};

export default withTrans(Footer);
