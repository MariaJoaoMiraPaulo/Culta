import React from 'react';
import styled from 'styled-components';
import { Body, TitleBold } from '../../styles/typographyComponents';
import { devices } from '../../styles/devices';
import { ButtonAsIcon } from '../Button';

const CenteredSectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  text-align: center;
  display: flex;
  align-items: center;
  padding: 3rem;
  height: 800px;
  min-height: 500px;
  @media ${devices.tablet} {
    padding: 3rem 20%;
  }
`;

const SectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  text-align: center;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  @media ${devices.tablet} {
    padding: 6rem;
  }
`;

const RightTitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;

  span,
  h1 {
    width: 100%;
    text-align: right;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: flex-end;

    span {
      width: 80%;
      text-align: left;
      padding-right: 30px;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    h1 {
      text-align: right;
      padding-right: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`;

const LeftTitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  span,
  h1 {
    width: 100%;
    text-align: left;
  }

  @media ${devices.tablet} {
    align-items: flex-end;
    flex-direction: row;

    span {
      width: 80%;
      text-align: right;
      padding-right: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    h1 {
      text-align: left;
      padding-bottom: 0;
      padding-right: 10px;
      margin-bottom: 0;
    }
  }
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
`;

export const TextSection = ({ background, color, textRight, title, body }) => {
  return (
    <SectionWrapper color={color} background={background}>
      <SectionContentWrapper>
        {textRight ? (
          <LeftTitleSection>
            <TitleBold>{title}</TitleBold>
            <Body>{body}</Body>
          </LeftTitleSection>
        ) : (
          <RightTitleSection>
            <Body>{body}</Body>
            <TitleBold>{title}</TitleBold>
          </RightTitleSection>
        )}
        <LinkWrapper right={textRight}>
          <ButtonAsIcon color="red" />
        </LinkWrapper>
      </SectionContentWrapper>
    </SectionWrapper>
  );
};

export const CenteredSection = ({ background, color, body, linksTo }) => {
  return (
    <CenteredSectionWrapper color={color} background={background}>
      <Body>{body}</Body>
    </CenteredSectionWrapper>
  );
};
