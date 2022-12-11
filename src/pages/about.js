import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import AboutLayout from '../components/layouts/AboutLayout';

const AboutPage = () => {
  return (
    <LayoutWrapper logoColor="blue">
      <AboutLayout />
    </LayoutWrapper>
  );
};

export default AboutPage;
