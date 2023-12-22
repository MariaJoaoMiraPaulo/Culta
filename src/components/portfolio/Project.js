import * as React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

import TitleSection from '../sections/TitleSection';
import ImageProjectSection from '../sections/ImageProjectSection';
import TextSection from '../sections/TextSection';
import { withTrans } from '../../i18n/withTrans';
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
      <ImageProjectSection
        color="red"
        projectInfo={{ year, customer, service }}
        title={title.toUpperCase()}
        image={backgroundImage.gatsbyImageData}
        imageAlt={backgroundImage.gatsbyImageDescription}
        padding="0"
        paddingMobile="1rem 0"
      />
      <ProjectContent>
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
