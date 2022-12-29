import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ContactsLayout from '../components/layouts/ContactsLayout';
import { getImagesMappedByName } from '../utils/queryFunctions';
import { graphql } from 'gatsby';

const ContactsPage = ({ data }) => {
  const images = getImagesMappedByName(data);

  return (
    <LayoutWrapper logoColor="blue">
      <ContactsLayout images={images} />
    </LayoutWrapper>
  );
};

export default ContactsPage;

export const query = graphql`
  query MyQuery {
    allImageSharp(
      filter: { fluid: { originalName: { in: ["pilares.jpg", "what.jpg"] } } }
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
