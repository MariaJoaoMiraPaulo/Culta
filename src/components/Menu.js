import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import { MenuTitle } from '../styles/typographyComponents';
import { LinkWrapper } from './LinkWrapper';
import { useTranslation } from 'react-i18next';

const MenuWrapper = styled.div`
  margin: 2rem;
  position: absolute;
  right: 0;
`;
const MenuItems = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.marble};
  padding: 2rem;
  display: ${p => (p.open ? 'block' : 'none')};
  z-index: 9;
`;

const AuxMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuContent = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.colors.red};
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.red};
`;

const Menu = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <MenuWrapper>
        {!isMenuOpen && <MenuIcon onClickHandler={() => setIsMenuOpen(true)} />}
      </MenuWrapper>
      <MenuItems open={isMenuOpen}>
        <AuxMenu>
          <MenuHeader>
            <CloseIcon
              color="red"
              onClickHandler={() => setIsMenuOpen(false)}
            />
          </MenuHeader>
          <MenuContent>
            <Links>
              <LinkWrapper to="/about" color="red" radius="25px">
                <MenuTitle>{t('about').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              <LinkWrapper to="/" color="red" radius="25px">
                <MenuTitle>{t('services').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              <LinkWrapper to="/" color="red" radius="25px">
                <MenuTitle>{t('stories').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              <LinkWrapper to="/" color="red" radius="25px">
                <MenuTitle>{t('gallery').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              {/* <LinkWrapper to="/" color="red" radius="25px"><MenuTitle>{t('portfolio').toUpperCase()}</MenuTitle></LinkWrapper> */}
              <LinkWrapper to="/" color="red" radius="25px">
                <MenuTitle>{t('contacts').toUpperCase()}</MenuTitle>
              </LinkWrapper>
            </Links>
          </MenuContent>
        </AuxMenu>
      </MenuItems>
    </>
  );
};

export default Menu;
