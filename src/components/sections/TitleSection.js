import React from 'react';
import styled from 'styled-components';
import { Title } from '../../styles/typographyComponents';
import { devices } from '../../styles/devices';

const SectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  text-align: center;
  overflow-wrap: break-word;
  padding: 3rem 1rem;
  @media ${devices.tablet} {
    padding: 4rem 3rem;
  }
`;

const TitleSection = ({ title, background, color }) => {
  return (
    <SectionWrapper background={background} color={color}>
      <Title>{title}</Title>
    </SectionWrapper>
  );
};

export default TitleSection;
