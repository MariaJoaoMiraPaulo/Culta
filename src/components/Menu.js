import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import { Title, TitleBold } from '../styles/typographyComponents';

const MenuWrapper = styled.div`
    margin: 2rem;
`
const MenuItems = styled.div`
    position: relative;
    top: 0;
    right: 0;
    width: 400px;
    background-color: #f0ede3;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    display: ${p => p.open ? 'block' : 'none'};
`

const MenuHeader = styled.div`
    display: flex;
    justify-content: flex-end;  
`

const MenuContent = styled.div`
    padding: 0 20px 20px 30px;
`

const MenuItem = styled.div`
   font-size: 20px;
   cursor: pointer;
   padding: 5px 40px;
   color: #758073;
   font-family: HelveticaNeue;
`


const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);    
    return(
        <>
            <MenuWrapper>
                {!isMenuOpen && <MenuIcon color='#000' onClickHandler={()=> setIsMenuOpen(true)}/>}
            </MenuWrapper>
            <MenuItems open={isMenuOpen}>
                <MenuHeader>
                    <CloseIcon color="#cf5945" onClickHandler={()=> setIsMenuOpen(false)}/>
                </MenuHeader>
                <MenuContent>
                    <TitleBold>NÓS</TitleBold>
                    <MenuItem>Sobre nós</MenuItem>
                    <MenuItem>Blog</MenuItem>
                </MenuContent>
                <MenuContent>
                    <TitleBold>CRIAMOS</TitleBold>
                    <MenuItem>O que fazemos</MenuItem>
                    <MenuItem>Serviços</MenuItem>
                </MenuContent>
                <MenuContent>
                    <TitleBold>CULTURA</TitleBold>
                    <MenuItem>Portfólio</MenuItem>
                    <MenuItem>Galeria</MenuItem>
                </MenuContent>
                <MenuContent>
                    <TitleBold>JUNTOS</TitleBold>
                    <MenuItem>Contacte-nos</MenuItem>
                    <MenuItem>Faça parte da equipa</MenuItem>
                </MenuContent>
            </MenuItems>
        </>
       
    )
}


export default Menu;