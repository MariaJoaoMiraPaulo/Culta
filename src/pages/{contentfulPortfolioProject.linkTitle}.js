import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ProjectLayout from '../components/layouts/ProjectLayout';
import { Seo } from '../components/Seo';
import PreviousNextLinks from '../components/previousAndNext/PreviousNextLinks';
import { withTrans } from '../i18n/withTrans';

const Project = ({ t, data }) => {
  const project = React.useMemo(() => {
    return data.contentfulPortfolioProject;
  }, [data.contentfulPortfolioProject]);

  if (!data.contentfulPortfolioProject) {
    return navigate('/404');
  }

  const jumpTo = linkTitle => {
    return navigate(`/${linkTitle}`);
  };

  // Extract projectGallery from the current project
  const projectGallery = project.projectGallery || [];

  return (
    <>
      <Seo
        title={data.contentfulPortfolioProject.title}
        description={data.contentfulPortfolioProject.description}
        pathname={data.contentfulPortfolioProject.id}
        fullImageUrl={
          data.contentfulPortfolioProject?.backgroundImage?.gatsbyImageData
            ?.images.fallback?.src
        }
      />
      <LayoutWrapper color="red">
        <ProjectLayout
          project={project}
          assets={data.allContentfulAsset}
          projectGallery={projectGallery}
        />
        <PreviousNextLinks
          data={data.allContentfulPortfolioProject.edges}
          currentDataItemId={data.contentfulPortfolioProject.id}
          jumpTo={jumpTo}
          next={t('portfolio.links.next')}
          previous={t('portfolio.links.previous')}
        />
      </LayoutWrapper>
    </>
  );
};

export default withTrans(Project);

export const query = graphql`
  query PortfolioProject($linkTitle: String!) {
    contentfulPortfolioProject(linkTitle: { eq: $linkTitle }) {
      id
      createdAt
      linkTitle
      title
      description {
        raw
      }
      backgroundImage {
        description
        gatsbyImageData(layout: CONSTRAINED)
        publicUrl
      }
      projectGallery {
        contentful_id
        gatsbyImageData(layout: CONSTRAINED)
        description
        id
      }
      year
      customer
      service
    }
    allContentfulAsset {
      edges {
        node {
          url
          file {
            contentType
            details {
              image {
                height
                width
              }
            }
          }
          contentful_id
          description
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
    allContentfulPortfolioProject(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          linkTitle
          createdAt
          backgroundImage {
            gatsbyImageData(layout: CONSTRAINED)
          }
          description {
            raw
          }
          projectGallery {
            contentful_id
            gatsbyImageData(layout: CONSTRAINED)
            description
            id
          }
        }
      }
    }
  }
`;
