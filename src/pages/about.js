import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import AboutLayout from '../components/layouts/AboutLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';
import { SEO } from '../components/SEO';
import metadata from '../data/metadata';

const AboutPage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);

  return (
    <>
      <SEO
        title={metadata.about.title}
        description={metadata.about.description}
        imagePath={images['pilares.jpg'].images.fallback.src}
        pathname="about"
      />
      <LayoutWrapper color="red">
        <AboutLayout images={images} />
      </LayoutWrapper>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query MyQuery {
    allImageSharp(
      filter: {
        fluid: { originalName: { in: ["pilares.jpg", "bannerAbout.jpg"] } }
      }
    ) {
      edges {
        node {
          id
          gatsbyImageData
          fluid {
            originalName
          }
        }
      }
    }
  }
`;
