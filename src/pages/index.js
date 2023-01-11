import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import HomeLayout from '../components/layouts/HomeLayout';
import { graphql } from 'gatsby';
import {
  getImagesMappedByName,
  getArrayOfBannerImages,
} from '../utils/queryFunctions';

const HomePage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);
  const bannerImagesArray = getArrayOfBannerImages(data.allFile.edges);

  console.log({ bannerImagesArray });
  return (
    <LayoutWrapper
      inline={false}
      isHomepage
      bannerImage={images['1.jpg']}
      noPadding
    >
      <HomeLayout images={images} />
    </LayoutWrapper>
  );
};

export default HomePage;

export const query = graphql`
  query MyQuery {
    allImageSharp(
      filter: {
        fluid: { originalName: { in: ["proud.jpg", "what.jpg", "1.jpg"] } }
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
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        childImageSharp: {
          fluid: { originalName: { in: ["proud.jpg", "what.jpg", "1.jpg"] } }
        }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData
            fluid {
              originalName
            }
          }
        }
      }
    }
  }
`;
