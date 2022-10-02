import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';

const MenuWrapper = styled.div`
    color: ${props => props.open ? 'black' : 'white'};
    padding: 1rem;
`
const MenuItems = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 500px;
`

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    console.log(isMenuOpen)
    
    return(
        <MenuWrapper open={isMenuOpen}>
            <MenuIcon onClickHandler={()=> setIsMenuOpen(true)}/>
            { isMenuOpen && <MenuItems>hello</MenuItems>}
        </MenuWrapper>
    )
}


export default Menu;