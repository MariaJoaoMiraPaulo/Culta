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
  @media ${devices.tablet} {
    padding: ${({ paddingTop }) => paddingTop || '0'} 3rem
      ${({ paddingBottom }) => paddingBottom || '7rem'} 3rem;
  }
`;

const TitleSection = ({
  title,
  background,
  color,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <SectionWrapper
      background={background}
      color={color}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
    >
      <Title>{title}</Title>
    </SectionWrapper>
  );
};

export default TitleSection;
