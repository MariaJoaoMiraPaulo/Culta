import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import AboutLayout from '../components/layouts/AboutLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';
import BodyColor from '../components/BodyColor';

const AboutPage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);

  return (
    <BodyColor>
      <LayoutWrapper logoColor="red">
        <AboutLayout images={images} />
      </LayoutWrapper>
    </BodyColor>
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
