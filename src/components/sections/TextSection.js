import React from 'react';
import styled from 'styled-components';
import { Body, SubTitle } from '../../styles/typographyComponents';
import { devices } from '../../styles/devices';

const TextSectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    padding: 0 ${({ percentage }) => percentage || null};
    padding-bottom: 7rem;
  }
  white-space: pre-line;
`;

const TitleWrapper = styled.div`
  padding: 0 0 2rem 0;
`;

const BodyWrapper = styled.div`
  align-items: left;
  text-align: left;
`;

const CenteredBodyWrapper = styled.div`
  text-align: center;
`;

const TextSection = ({ background, color, body, title=false, centered=false, percentage }) => {
  return (
      <TextSectionWrapper color={color} background={background} percentage={percentage}>
        {title ? 
          <TitleWrapper>
            <SubTitle color="blue">{title}</SubTitle> 
          </TitleWrapper>
        : null}
        {centered?
          <CenteredBodyWrapper>
            <Body>{body}</Body>
          </CenteredBodyWrapper>
        :
          <BodyWrapper>
            <Body>{body}</Body>
          </BodyWrapper>
        }
      </TextSectionWrapper>
  );
};

export default TextSection;