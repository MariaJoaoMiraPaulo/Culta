import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ContactLayout from '../components/layouts/ContactLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';

const ContactPage = ({ data }) => {
  const images = getImagesMappedByName(data.allImageSharp.edges);

  return (
    <LayoutWrapper logoColor="red">
      <ContactLayout images={images} />
    </LayoutWrapper>
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
