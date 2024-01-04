import React from 'react';
import styled from 'styled-components';
import Image from '../Image';
import { devices } from '../../styles/devices';
import { withTrans } from '../../i18n/withTrans';
import { Body, Caption, SubTitle } from '../../styles/typographyComponents';
import ArrowIcon from '../../icons/ArrowIcon';
import { navigate } from 'gatsby';

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
  margin: 3rem 3rem 0 3rem;

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
  padding: ${({ paddingMobile }) => paddingMobile};
  gap: 3rem;
  @media ${devices.tablet} {
    padding: ${({ padding }) => padding};
    justify-content: space-between;
    gap: 0;
  }
  white-space: pre-line;
  z-index: 9;
  width: ${({ width }) => width || '100%'};
  box-sizing: border-box;
  height: 100%;
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
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem 1rem;
  span {
    margin: 0;
  }
`;

const BackToPortfolioDesktopTablet = styled.div`
  display: none;
  padding: 16px 0;

  @media ${devices.tablet} {
    display: block;
    padding: 16px;
  }

  svg {
    width: 30px;
    stroke-width: 5px;
    &:hover,
    &:active {
      filter: blur(2px);
    }
  }
`;

const BackToPortfolioMobile = styled.div`
  display: block;
  padding: 16px 0;

  @media ${devices.tablet} {
    display: none;
    padding: 16px;
  }

  svg {
    width: 30px;
    stroke-width: 5px;
    &:hover,
    &:active {
      filter: blur(2px);
    }
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
    <>
      <BackToPortfolioDesktopTablet onClick={() => navigate('/projects')}>
        <ArrowIcon left color="red" />
      </BackToPortfolioDesktopTablet>
      <ImageTextWrapper background={background} hideOnDesktop={hideOnDesktop}>
        <ImageWrapper>
          <Image image={image} imageAlt={imageAlt} />
        </ImageWrapper>
        <TextWrapper>
          <BackToPortfolioMobile onClick={() => navigate('/projects')}>
            <ArrowIcon left color="red" />
          </BackToPortfolioMobile>
          <ProjectInfoSectionWrapper
            color={color}
            background={background}
            padding={padding}
            paddingMobile={paddingMobile}
          >
            {title ? <SubTitle color={color}>{title}</SubTitle> : null}
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
    </>
  );
};

export default withTrans(ImageTextSection);
