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
  padding: 3rem;
  @media ${devices.tablet} {
    padding: 4rem ${({ percentage }) => percentage || "20%"};
  }
  white-space: pre-line;
`;

const TitleWrapper = styled.div`
  padding: 2rem 0;
`;

const BodyWrapper = styled.div`
  align-items: left;
  text-align: left;
`;

const CenteredBodyWrapper = styled.div`
  align-items: center;
  text-align: center;
`;

const TextSection = ({ background, color, body, title=false, centered=false, percentage }) => {
  return (
      <TextSectionWrapper color={color} background={background} percentage={percentage}>
        <TitleWrapper>
          {title ? <SubTitle color="blue">{title}</SubTitle> : null}
        </TitleWrapper>
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