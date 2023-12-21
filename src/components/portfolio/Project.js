import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import theme from '../../styles/theme';

import ArrowIcon from '../../icons/ArrowIcon';
import { navigate } from 'gatsby';
import TitleSection from '../sections/TitleSection';
import ImageTextSection from '../sections/ImageTextSection';
import TextSection from '../sections/TextSection';
import { withTrans } from '../../i18n/withTrans';

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

  @media ${devices.tablet} {
    max-width: 70%; //AQUI
  }
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

  padding: 15px 0;
`;

const Project = ({ t, project }) => {
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
        <ImageTextSection
          color="red"
          projectInfo={{ year, customer, service }}
          title={title.toUpperCase()}
          image={backgroundImage.gatsbyImageData}
          imageAlt={backgroundImage.gatsbyImageDescription}
          padding="0"
          paddingMobile="1rem 0"
        />
        <TextSection
          padding="3rem 0"
          color="grey"
          body={description.description}
        />
      </ProjectContent>
    </ProjectWrapper>
  );
};

export default withTrans(Project);
