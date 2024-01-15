import * as React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import ProjectCard from '../portfolio/ProjectCard';
import { withTrans } from '../../i18n/withTrans';
import TitleSection from '../sections/TitleSection';

const PortfolioPageLayout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  min-height: 90vh;
  margin-bottom: 2.5rem;
  grid-gap: 20px;
  padding: 20px;
  @media ${devices.tablet} {
    grid-template-columns: 49% 49%;
  }
  @media ${devices.desktop} {
    grid-template-columns: 24% 24% 24% 24%;
  }
`;

const PortfolioLayout = ({ data, t }) => {
  return (
    <>
      <TitleSection
        padding="4rem 1rem"
        paddingMobile="1rem 1rem"
        title={t('portfolio.projects').toUpperCase()}
        background="marble"
        color="blue"
      />
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
    </>
  );
};

export default withTrans(PortfolioLayout);
