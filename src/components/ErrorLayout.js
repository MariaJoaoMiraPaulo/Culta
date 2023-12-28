import React from 'react';
import { Caption, SubTitle } from '../styles/typographyComponents';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Header from '../components/Header';

const CentralText = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  flex-direction: column;
`;

const Page = styled.div`
  background-color: ${({ theme }) => theme.colors['marble']};
  max-width: 100%;
  height: 100vh;
`;

const ErrorTitle = styled.div`
  padding: 2rem 0;

  span {
    text-transform: uppercase;
  }
`;

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors['red']};
  text-transform: uppercase;

  &:hover {
    color: transparent;
    text-shadow: 0 0 10px red;
  }
`;

const ErrorLayout = ({ title, description, cta }) => {
  return (
    <Page>
      <Header />
      <CentralText>
        <ErrorTitle>
          <SubTitle color="red">{title}</SubTitle>
        </ErrorTitle>
        <Caption color="red">{description}</Caption>
        <CustomLink to="/">{cta}</CustomLink>
      </CentralText>
    </Page>
  );
};

export default ErrorLayout;
