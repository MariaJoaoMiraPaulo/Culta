import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import { MenuTitle } from '../styles/typographyComponents';
import { LinkWrapper } from './LinkWrapper';
import { withTrans } from '../i18n/withTrans';
import { navigate } from 'gatsby';

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 1rem;
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

const Menu = ({ t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const jumpTo = path => {
    navigate(path);
    setIsMenuOpen(false);
  };

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
              <LinkWrapper
                onClick={() => jumpTo('/about')}
                color="red"
                radius="25px"
              >
                <MenuTitle>{t('menu.about').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              <LinkWrapper
                onClick={() => jumpTo('/services')}
                color="red"
                radius="25px"
              >
                <MenuTitle>{t('menu.services').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              <LinkWrapper
                onClick={() => jumpTo('/blog')}
                color="red"
                radius="25px"
              >
                <MenuTitle>{t('menu.stories').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              <LinkWrapper
                onClick={() => jumpTo('/gallery')}
                color="red"
                radius="25px"
              >
                <MenuTitle>{t('menu.gallery').toUpperCase()}</MenuTitle>
              </LinkWrapper>
              {/* <LinkWrapper to="/" color="red" radius="25px"><MenuTitle>{t('portfolio').toUpperCase()}</MenuTitle></LinkWrapper> */}
              <LinkWrapper
                onClick={() => jumpTo('/contact')}
                color="red"
                radius="25px"
              >
                <MenuTitle>{t('menu.contacts').toUpperCase()}</MenuTitle>
              </LinkWrapper>
            </Links>
          </MenuContent>
        </AuxMenu>
      </MenuItems>
    </>
  );
};

export default withTrans(Menu);
