import * as React from 'react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import HomeLayout from '../components/layouts/HomeLayout';
import { graphql, Script } from 'gatsby';
import {
  getImagesMappedByName,
  getArrayOfBannerImages,
} from '../utils/queryFunctions';
import { SEO } from '../components/SEO';
import metadata from '../data/metadata';

const HomePage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);
  const bannerImagesArray = getArrayOfBannerImages(data.allFile.edges);
  const currentBannerImage =
    bannerImagesArray[Math.floor(Math.random() * bannerImagesArray.length)];

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-NJDCBBG',
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENTID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENTID}');
        `}
      </Script>
      <SEO
        description={metadata.home.description}
        imagePath={currentBannerImage.images.fallback.src}
      />
      <LayoutWrapper
        shortenedVersion={false}
        isHomepage
        bannerImage={currentBannerImage}
        noPadding
      >
        <HomeLayout images={images} />
      </LayoutWrapper>
    </>
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
