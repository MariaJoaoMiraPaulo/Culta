import React from 'react';
import styled from 'styled-components';
import { Body, Caption, SubTitle } from '../../styles/typographyComponents';
import { devices } from '../../styles/devices';
import { withTrans } from '../../i18n/withTrans';

const ProjectInfoSectionWrapper = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ paddingMobile }) => paddingMobile};
  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
  }
  white-space: pre-line;
  z-index: 9;
  width: ${({ width }) => width || '100%'};
  box-sizing: border-box;
  height: 100%;
`;

const TitleWrapper = styled.div`
  padding: 0 0 2rem 0;
`;

const BodyWrapper = styled.div`
  align-items: left;
  text-align: left;
`;

const ProjectInfo = styled.body`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const FixedInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    justify-content: flex-end;
  }
`;

const VariableInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    justify-content: flex-end;
  }
`;

const ProjectInfoSection = ({
  t,
  background,
  color,
  projectInfo,
  title = false,
  padding,
  paddingMobile,
  width,
}) => {
  return (
    <ProjectInfoSectionWrapper
      color={color}
      background={background}
      padding={padding}
      paddingMobile={paddingMobile}
      width={width}
    >
      {title ? (
        <TitleWrapper>
          <SubTitle color={color}>{title}</SubTitle>
        </TitleWrapper>
      ) : null}
      <BodyWrapper>
        <ProjectInfo>
          <FixedInfo>
            <Caption lineHeight="33">
              {t('portfolio.projectInfo.year').toUpperCase()}
            </Caption>
            <Caption lineHeight="33">
              {t('portfolio.projectInfo.customer').toUpperCase()}
            </Caption>
            <Caption lineHeight="33">
              {t('portfolio.projectInfo.service').toUpperCase()}
            </Caption>
          </FixedInfo>
          <VariableInfo>
            <Body>{projectInfo.year}</Body>
            <Body>{projectInfo.customer}</Body>
            <Body>{projectInfo.service}</Body>
          </VariableInfo>
        </ProjectInfo>
      </BodyWrapper>
    </ProjectInfoSectionWrapper>
  );
};

export default withTrans(ProjectInfoSection);
