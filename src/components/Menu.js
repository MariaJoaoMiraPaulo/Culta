import React, { useState } from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import { Title } from '../styles/typographyComponents';
import { LinkWrapper } from './LinkWrapper';
import { useTranslation } from 'react-i18next';

const MenuWrapper = styled.div`
  margin: 2rem;
  position: absolute;
  right: 0;
`;
const MenuItems = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${props => rgba(props.theme.colors.marble, 0.7)};
  padding: 2rem;
  display: ${p => (p.open ? 'block' : 'none')};
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
        {!isMenuOpen && (
          <MenuIcon color="red" onClickHandler={() => setIsMenuOpen(true)} />
        )}
      </MenuWrapper>
      <MenuItems open={isMenuOpen}>
        <AuxMenu>
          <MenuHeader>
            <CloseIcon color="red" onClickHandler={() => setIsMenuOpen(false)} />
          </MenuHeader>
          <MenuContent>
            <Links>
              <LinkWrapper to="/about"><Title>{t('about').toUpperCase()}</Title></LinkWrapper>
              <LinkWrapper to="/"><Title>{t('blog').toUpperCase()}</Title></LinkWrapper>
              <LinkWrapper to="/"><Title>{t('services').toUpperCase()}</Title></LinkWrapper>
              <LinkWrapper to="/"><Title>{t('contacts').toUpperCase()}</Title></LinkWrapper>
            </Links>
          </MenuContent>
        </AuxMenu>
      </MenuItems>
    </>
  );
};

export default Menu;
