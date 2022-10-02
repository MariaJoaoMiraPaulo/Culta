import * as React from "react"
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    color: white;
`

const HeaderLink = styled.a`
    padding: 30px;
    cursor: pointer;
`

const Header = () => {
    const {t} = useTranslation();
    
    return(
        <HeaderWrapper>
            <HeaderLink>{t("about-us").toUpperCase()}</HeaderLink>
            <HeaderLink>{t("portfolio").toUpperCase()}</HeaderLink>
            <HeaderLink>{t("blog").toUpperCase()}</HeaderLink>
            <HeaderLink>{t("contacts").toUpperCase()}</HeaderLink>
            <HeaderLink>PT|EN</HeaderLink>
        </HeaderWrapper>
   )
}



export default Header