import * as React from 'react';
import Project from '../portfolio/Project';
import styled from 'styled-components';

const ProjectPageLayout = styled.div`
  padding: 3rem 0 0;
`;

const ProjectLayout = ({ project, assets }) => {
  return (
    <ProjectPageLayout>
      <Project project={project} assets={assets} />
    </ProjectPageLayout>
  );
};

export default ProjectLayout;
