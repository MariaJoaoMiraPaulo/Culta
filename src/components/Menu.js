import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';

const MenuWrapper = styled.div`
    margin: 2rem;
`
const MenuItems = styled.div`
    height: 100%;
    position: relative;
    top: 0;
    right: 0;
    width: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    zIndex: 0;
`

const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;  
`

const Slogan = styled.div`
    display: flex;
    font-size: 25px;
    font-family: HelveticaNeue;
    font-weight: 200;
`

const SloganLink = styled.a`
    font-family: HelveticaNeue;
    font-weight: 200;
    text-decoration: none;
    padding-right: 5px;
    cursor: pointer;
    color: ${p => p.active ? '#cf5945' : '#000'}
`

const MenuContent = styled.div`
    padding: 2rem 1rem;
`

const MenuItem = styled.div`
   font-size: 20px;
   padding: 10px;
   cursor: pointer;
`

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeGroup, setActiveGroup] = useState(0);
    
    return(
        <>
            <MenuWrapper>
                {!isMenuOpen && <MenuIcon color='#ffff' onClickHandler={()=> setIsMenuOpen(true)}/>}
            </MenuWrapper>
            { isMenuOpen && 
                <MenuItems>
                    <MenuHeader>
                        <Slogan>
                            <SloganLink active={activeGroup===0} onClick={()=>setActiveGroup(0)}>NÓS</SloganLink>
                            <SloganLink active={activeGroup===1} onClick={()=>setActiveGroup(1)}>CRIAMOS</SloganLink>
                            <SloganLink active={activeGroup===2} onClick={()=>setActiveGroup(2)}>CULTURA</SloganLink>
                            <SloganLink active={activeGroup===3} onClick={()=>setActiveGroup(3)}>JUNTOS</SloganLink>
                        </Slogan>
                        <CloseIcon onClickHandler={()=> setIsMenuOpen(false)}/>
                    </MenuHeader>
                    
                    <MenuContent>
                        <MenuItem>Sobre nós</MenuItem>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Contactos</MenuItem>
                    </MenuContent>
                </MenuItems>
            }
        </>
       
    )
}


export default Menu;