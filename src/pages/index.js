import * as React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import HomeLayout from '../components/layouts/HomeLayout';

const HomePage = () => {
  return (
    <LayoutWrapper inline={false} isHomepage>
      <HomeLayout />
    </LayoutWrapper>
  );
};

export default HomePage;
