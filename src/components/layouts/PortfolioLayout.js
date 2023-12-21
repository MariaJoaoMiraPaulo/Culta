import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import ProjectCard from '../portfolio/ProjectCard';

const PortfolioPageLayout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  min-height: 90vh;
  margin-bottom: 2.5rem;
  @media ${devices.tablet} {
    grid-template-columns: 50% 50%;
  }
  @media ${devices.desktop} {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

const PortfolioLayout = ({ data }) => {
  return (
    <PortfolioPageLayout>
      {data.map(({ node }) => (
        <ProjectCard
          key={node.id}
          title={node.title}
          linkTitle={node.linkTitle}
          image={node.backgroundImage.gatsbyImageData}
          id={node.id}
        />
      ))}
    </PortfolioPageLayout>
  );
};

export default PortfolioLayout;
