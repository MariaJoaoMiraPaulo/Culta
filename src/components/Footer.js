import * as React from 'react';
import styled from 'styled-components';
import { CopyrightText, FooterText } from '../styles/typographyComponents';
import culta from '../data/culta';
import { withTrans } from '../i18n/withTrans';
import { devices } from '../styles/devices';

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

const FooterLink = styled(FooterText)`
  cursor: pointer;

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
              <FooterText>{t('footer.contacts').toUpperCase()}</FooterText>
            </th>
            <th>
              <FooterText>{t('footer.newsletter').toUpperCase()}</FooterText>
            </th>
          </tr>
          <tr>
            <Td></Td>
            <Td>
              <AuxLink>{t('footer.subscribe')}</AuxLink>
            </Td>
          </tr>
          <tr>
            <td>
              <ColumnWrapper>
                <FooterLink>{culta.phoneNumber}</FooterLink>
                <FooterLink>{culta.email.toUpperCase()}</FooterLink>
              </ColumnWrapper>
            </td>
            <td>
              <ColumnWrapper>
                <FooterLink>{t('footer.linkedin').toUpperCase()}</FooterLink>
                <FooterLink>{t('footer.instagram').toUpperCase()}</FooterLink>
              </ColumnWrapper>
            </td>
          </tr>
        </tbody>
      </Table>
      <Copyright>
        <CopyrightText>{t('footer.copyright')}</CopyrightText>
        <AuxLink>
          <CopyrightText>{t('footer.policy')}</CopyrightText>
        </AuxLink>
        <AuxLink>
          <CopyrightText>{t('footer.terms')}</CopyrightText>
        </AuxLink>
      </Copyright>
    </FooterWrapper>
  );
};

export default withTrans(Footer);
