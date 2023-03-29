import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ContactLayout from '../components/layouts/ContactLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';
import { SEO } from '../components/SEO';
import metadata from '../data/metadata';

const ContactPage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);

  return (
    <>
      <SEO
        title={metadata.contacts.title}
        description={metadata.contacts.description}
        pathname="contacts"
        imagePath={images['pilares.jpg'].images.fallback.src}
      />
      <LayoutWrapper logoColor="red" menuColor="blue">
        <ContactLayout images={images} />
      </LayoutWrapper>
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query MyQuery {
    allImageSharp(
      filter: { fluid: { originalName: { in: ["pilares.jpg"] } } }
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
