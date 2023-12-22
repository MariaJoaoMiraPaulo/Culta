import * as React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

import ArrowIcon from '../../icons/ArrowIcon';
import { navigate } from 'gatsby';
import TitleSection from '../sections/TitleSection';
import ImageProjectSection from '../sections/ImageProjectSection';
import TextSection from '../sections/TextSection';
import { withTrans } from '../../i18n/withTrans';
import { devices } from '../../styles/devices';
import { richTextToReactElements } from '../helpers/richTextConverter';

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.red};
  position: relative;
`;

const ProjectContent = styled.div`
  max-width: 100%;
  margin: 3rem 3rem 0 3rem;
`;

const BackToPortfolio = styled.div`
  svg {
    width: 30px;
    stroke-width: 5px;
    &:hover,
    &:active {
      filter: blur(2px);
    }
  }
  @media ${devices.tablet} {
    padding: 16px;
  }
`;

const Project = ({ t, project, assets }) => {
  const { title, description, year, customer, service, backgroundImage } =
    project;

  return (
    <ProjectWrapper>
      <TitleSection
        padding="4rem 1rem"
        paddingMobile="1rem 1rem"
        title={t('portfolio.projects')}
        background="marble"
        color="red"
      />
      <ProjectContent>
        <BackToPortfolio onClick={() => navigate('/portfolio')}>
          <ArrowIcon left color="red" />
        </BackToPortfolio>
        <ImageProjectSection
          color="red"
          projectInfo={{ year, customer, service }}
          title={title.toUpperCase()}
          image={backgroundImage.gatsbyImageData}
          imageAlt={backgroundImage.gatsbyImageDescription}
          padding="0"
          paddingMobile="1rem 0"
        />
        <TextSection
          padding="3rem 1rem"
          color="grey"
          body={richTextToReactElements({ raw: description.raw }, assets)}
          width="50%"
        />
      </ProjectContent>
    </ProjectWrapper>
  );
};

export default withTrans(Project);
