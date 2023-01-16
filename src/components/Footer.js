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

const AuxLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

const AuxLink = styled.a`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  margin: 0rem;
  cursor: pointer;

  &: hover {
    text-decoration: underline;
  }

  @media ${devices.tablet} {
    font-size: 16px;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  @media ${devices.tablet} {
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

const FlexTable = styled.div`
  display: flex;
  width: 100%;
  margin: 2.5rem;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    margin: 4rem;
  }
`;

const FlexTableColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  &:first-child {
    padding-bottom: 30px;
  }

  @media ${devices.tablet} {
    width: 50%;

    &:first-child {
      padding-bottom: 0px;
    }
  }
`;

const FlexTableRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  &:first-child {
    padding-bottom: 0px;
  }

  @media ${devices.tablet} {
    height: 90px;

    &:first-child {
      padding-bottom: 40px;
    }
  }
`;

const Footer = ({ t }) => {
  return (
    <FooterWrapper>
      <FlexTable>
        <FlexTableColumn>
          <FlexTableRow>
            <FooterLink to="/contact">
              <BodySmall>{t('footer.contacts').toUpperCase()}</BodySmall>
            </FooterLink>
          </FlexTableRow>
          <FlexTableRow>
            <FooterAnchor href="tel:+351912681139">
              <BodySmall>{culta.phoneNumber}</BodySmall>
            </FooterAnchor>
            <FooterAnchor href="mailto:geral@culta.pt">
              <BodySmall>{culta.email.toUpperCase()}</BodySmall>
            </FooterAnchor>
          </FlexTableRow>
        </FlexTableColumn>
        <FlexTableColumn>
          <FlexTableRow>
            <BodySmall>{t('footer.newsletter').toUpperCase()}</BodySmall>
            <NewsletterForm />
          </FlexTableRow>
          <FlexTableRow>
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
          </FlexTableRow>
        </FlexTableColumn>
      </FlexTable>
      <Copyright>
        <AuxLinks>
          <AuxLink>
            <Caption>{t('footer.policy')}</Caption>
          </AuxLink>
          <AuxLink>
            <Caption>{t('footer.terms')}</Caption>
          </AuxLink>
          <AuxLink>
            <Caption>{t('footer.license')}</Caption>
          </AuxLink>
        </AuxLinks>
        <Caption>{t('footer.copyright')}</Caption>
      </Copyright>
    </FooterWrapper>
  );
};

export default withTrans(Footer);
