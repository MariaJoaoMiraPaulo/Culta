import React, { useState, useEffect } from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import HomeLayout from '../components/layouts/HomeLayout';
import { graphql } from 'gatsby';
import {
  getImagesMappedByName,
  getArrayOfBannerImages,
} from '../utils/queryFunctions';
import { SEO } from '../components/SEO';
import metadata from '../data/metadata';

const HomePage = React.memo(({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);
  const bannerImagesArray = getArrayOfBannerImages(data.allFile.edges);
  const currentBannerImage =
    bannerImagesArray[Math.floor(Math.random() * bannerImagesArray.length)];

  return (
    currentBannerImage && (
      <>
        <SEO
          description={metadata.home.description}
          imagePath={currentBannerImage.images.fallback.src}
        />
        <LayoutWrapper
          shortenedVersion={false}
          isHomepage
          color="marble"
          bannerImage={currentBannerImage}
          noPadding
        >
          <HomeLayout images={images} />
        </LayoutWrapper>
      </>
    )
  );
});

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
