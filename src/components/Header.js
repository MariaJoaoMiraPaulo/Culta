import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CollapsedLogo from '../icons/CollapsedLogo';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme, color }) => theme.colors[color]};
  position: relative;
  background-color: ${({ theme }) => theme.colors.marble_transparency};
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.a`
  padding: 30px;
  cursor: pointer;
`;

const Header = ({color}) => {
  const { t } = useTranslation();

  return (
    <HeaderWrapper color={color}>
      <CollapsedLogo color={color}/>
      <LinksWrapper>
        <HeaderLink>{t('about').toUpperCase()}</HeaderLink>
        <HeaderLink>{t('services').toUpperCase()}</HeaderLink>
        <HeaderLink>{t('blog').toUpperCase()}</HeaderLink>
        <HeaderLink>{t('gallery').toUpperCase()}</HeaderLink>
        <HeaderLink>{t('portfolio').toUpperCase()}</HeaderLink>
        <HeaderLink>{t('contacts').toUpperCase()}</HeaderLink>
        <HeaderLink>PT | EN</HeaderLink>
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
