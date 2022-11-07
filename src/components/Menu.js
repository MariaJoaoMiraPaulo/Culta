import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import { SubTitleBolder } from '../styles/typographyComponents';
import { LinkWrapper } from './LinkWrapper';
import { useTranslation } from 'react-i18next';

const MenuWrapper = styled.div`
  margin: 2rem;
  position: absolute;
  right: 0;
`;
const MenuItems = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 400px;
  background-color: ${props => props.theme.colors.marble};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  display: ${p => (p.open ? 'block' : 'none')};
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuContent = styled.div`
  padding: 0 20px 20px 30px;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  padding: 5px 40px;
  color: ${props => props.theme.colors.green};
  font-family: HelveticaNeue;
`;

const Menu = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <MenuWrapper>
        {!isMenuOpen && (
          <MenuIcon color="red" onClickHandler={() => setIsMenuOpen(true)} />
        )}
      </MenuWrapper>
      <MenuItems open={isMenuOpen}>
        <MenuHeader>
          <CloseIcon color="red" onClickHandler={() => setIsMenuOpen(false)} />
        </MenuHeader>
        <MenuContent>
          <SubTitleBolder>NÓS</SubTitleBolder>
          <LinkWrapper to="/about"><MenuItem>{t('about')}</MenuItem></LinkWrapper>
          <LinkWrapper to="/blog"><MenuItem>{t('blog')}</MenuItem></LinkWrapper>
        </MenuContent>
        <MenuContent>
          <SubTitleBolder>CRIAMOS</SubTitleBolder>
          <LinkWrapper to="/"><MenuItem>O que fazemos</MenuItem></LinkWrapper>
          <LinkWrapper to="/"><MenuItem>Serviços</MenuItem></LinkWrapper>
        </MenuContent>
        <MenuContent>
          <SubTitleBolder>CULTURA</SubTitleBolder>
          <LinkWrapper to="/"><MenuItem>Portfólio</MenuItem></LinkWrapper>
          <LinkWrapper to="/"><MenuItem>Galeria</MenuItem></LinkWrapper>
        </MenuContent>
        <MenuContent>
          <SubTitleBolder>JUNTOS</SubTitleBolder>
          <LinkWrapper to="/"><MenuItem>Contacte-nos</MenuItem></LinkWrapper>
          <LinkWrapper to="/"><MenuItem>Faça parte da equipa</MenuItem></LinkWrapper>
        </MenuContent>
      </MenuItems>
    </>
  );
};

export default Menu;
