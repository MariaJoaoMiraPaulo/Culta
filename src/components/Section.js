import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../styles/typographyComponents';
import { devices } from '../styles/devices';

const SectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  text-align: center;
  overflow-wrap: break-word;
  padding: ${props => props.m};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TwoSideSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  span {
    width: 55%;
    text-align: ${props => (props.inverted ? 'left' : 'right')};
  }

  h1 {
    text-align: ${props => (props.inverted ? 'right' : 'left')};
  }
`;

const Section = ({ background, color, children, title = false, inverted }) => {
  return (
    <SectionWrapper
      color={color}
      background={background}
      m={title ? '3rem' : '6rem 3rem'}
    >
      {title ? (
        <SectionTitle> {children} </SectionTitle>
      ) : (
        <TwoSideSection inverted={inverted}>{children}</TwoSideSection>
      )}
    </SectionWrapper>
  );
};

export default Section;
