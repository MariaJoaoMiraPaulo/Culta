import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import HomeLayout from '../components/layouts/HomeLayout';
import { graphql } from 'gatsby';
import {
  getImagesMappedByName,
  getArrayOfBannerImages,
} from '../utils/queryFunctions';
import BodyColor from '../components/BodyColor';

const HomePage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);
  const bannerImagesArray = getArrayOfBannerImages(data.allFile.edges);

  const getRandomPicFromBannerArray = () => {
    const random = Math.floor(Math.random() * bannerImagesArray.length);
    return random;
  };

  return (
    <BodyColor>
      <LayoutWrapper
        shortenedVersion={false}
        isHomepage
        bannerImage={bannerImagesArray[getRandomPicFromBannerArray()]}
        noPadding
      >
        <HomeLayout images={images} />
      </LayoutWrapper>
    </BodyColor>
  );
};

export default HomePage;

export const query = graphql`
  query MyQuery {
    allImageSharp(
      filter: {
        fluid: {
          originalName: { in: ["proud.jpg", "bannerAbout.jpg", "1.jpg"] }
        }
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
    allFile(filter: { sourceInstanceName: { eq: "bannerImages" } }) {
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
