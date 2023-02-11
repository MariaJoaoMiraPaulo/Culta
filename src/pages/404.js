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
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor] || 'none'};
  max-width: 100%;
  height: 100vh;
`;

const ErrorTitle = styled.div`
  padding: 2rem 0;
`;

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors['red']};
  text-transform: uppercase;

  &: hover {
    color: transparent;
    text-shadow: 0 0 10px red;
  }
`;

const NotFoundPage = () => {
  return (
    <Page backgroundColor="marble">
      <Header />
      <CentralText>
        <ErrorTitle>
          <SubTitle color="red">PAGE NOT FOUND</SubTitle>
        </ErrorTitle>
        <Caption color="red">
          Sorry we couldn't find what you were looking for.
        </Caption>
        <CustomLink to="/">Go Home</CustomLink>
      </CentralText>
    </Page>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
