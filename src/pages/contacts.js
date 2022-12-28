import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import ContactsLayout from '../components/layouts/ContactsLayout';

const ContactsPage = () => {
  return (
    <LayoutWrapper logoColor="blue">
      <ContactsLayout />
    </LayoutWrapper>
  );
};

export default ContactsPage;
