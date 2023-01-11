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
  padding: ${({ paddingMobile }) => paddingMobile};

  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
  }
`;

const TitleSection = ({ title, background, color, padding, paddingMobile }) => {
  return (
    <SectionWrapper
      background={background}
      color={color}
      padding={padding}
      paddingMobile={paddingMobile}
    >
      <Title>{title}</Title>
    </SectionWrapper>
  );
};

export default TitleSection;
