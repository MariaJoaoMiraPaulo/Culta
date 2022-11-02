import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import { SubTitleBolder } from '../styles/typographyComponents';

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
          <MenuItem>Sobre nós</MenuItem>
          <MenuItem>Blog</MenuItem>
        </MenuContent>
        <MenuContent>
          <SubTitleBolder>CRIAMOS</SubTitleBolder>
          <MenuItem>O que fazemos</MenuItem>
          <MenuItem>Serviços</MenuItem>
        </MenuContent>
        <MenuContent>
          <SubTitleBolder>CULTURA</SubTitleBolder>
          <MenuItem>Portfólio</MenuItem>
          <MenuItem>Galeria</MenuItem>
        </MenuContent>
        <MenuContent>
          <SubTitleBolder>JUNTOS</SubTitleBolder>
          <MenuItem>Contacte-nos</MenuItem>
          <MenuItem>Faça parte da equipa</MenuItem>
        </MenuContent>
      </MenuItems>
    </>
  );
};

export default Menu;
