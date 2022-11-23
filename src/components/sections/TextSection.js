import React from 'react';
import styled from 'styled-components';
import { Body, TitleBold } from '../../styles/typographyComponents';
import { devices } from '../../styles/devices';

const TextSectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  display: flex;
  flex-direction: column;
  padding: 3rem;
  height: 800px;
  @media ${devices.tablet} {
    padding: 4rem 15%;
  }
  white-space: pre-line;
`;

const BodyWrapper = styled.div`
  align-items: center;
  text-align: center;
`;

export const TextSection = ({ background, color, body, title=false }) => {
  return (
      <TextSectionWrapper color={color} background={background}>
          {title ? <TitleBold color="blue" smaller={true}>{title}</TitleBold> : null}
          <BodyWrapper>
            <Body>{body}</Body>
          </BodyWrapper>
      </TextSectionWrapper>
  );
};
