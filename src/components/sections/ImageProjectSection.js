import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import { devices } from '../../styles/devices';
import { withTrans } from '../../i18n/withTrans';
import { Body, Caption, SubTitle } from '../../styles/typographyComponents';

const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  background-color: ${({ theme, background }) =>
    theme.colors[background] || theme.colors.marble};

  @media ${devices.tablet} {
    flex-direction: row;
    padding-bottom: 0;
    display: flex;
  }

  @media ${devices.laptop} {
    display: ${props => (props.hideOnDesktop ? 'none' : 'flex')};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: 0;

  @media ${devices.tablet} {
    width: 50%;
    margin: 0 1rem;
  }
`;

const TextWrapper = styled.div`
  position: relative;

  @media ${devices.tablet} {
    width: 50%;
    margin: 0 1rem;
  }
`;

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
  margin: 0;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; /* Adjust column sizes as needed */
  grid-gap: 0.5rem 1rem;
  span {
    margin: 0;
  }
`;

const ImageTextSection = ({
  t,
  color,
  background,
  title,
  projectInfo,
  padding,
  image,
  imageAlt,
  paddingMobile,
  hideOnDesktop = false,
}) => {
  return (
    <ImageTextWrapper background={background} hideOnDesktop={hideOnDesktop}>
      <ImageWrapper>
        <Image image={image} imageAlt={imageAlt} />
      </ImageWrapper>
      <TextWrapper>
        <ProjectInfoSectionWrapper
          color={color}
          background={background}
          padding={padding}
          paddingMobile={paddingMobile}
        >
          {title ? (
            <TitleWrapper>
              <SubTitle color={color}>{title}</SubTitle>
            </TitleWrapper>
          ) : null}
          <BodyWrapper>
            <ProjectInfo>
              <Info>
                <Caption lineHeight="33">
                  {t('portfolio.projectInfo.year').toUpperCase()}
                </Caption>
                <Body>{projectInfo.year}</Body>
                <Caption lineHeight="33">
                  {t('portfolio.projectInfo.customer').toUpperCase()}
                </Caption>
                <Body>{projectInfo.customer}</Body>
                <Caption lineHeight="33">
                  {t('portfolio.projectInfo.service').toUpperCase()}
                </Caption>
                <Body>{projectInfo.service}</Body>
              </Info>
            </ProjectInfo>
          </BodyWrapper>
        </ProjectInfoSectionWrapper>
      </TextWrapper>
    </ImageTextWrapper>
  );
};

export default withTrans(ImageTextSection);
