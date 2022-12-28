import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import { withTrans } from '../../i18n/withTrans';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { SmallTitle } from '../../styles/typographyComponents';
import ImageSection from '../sections/ImageSection';

const ServicesWrapper = styled.div`
  display: grid;
  margin: 0 2rem;
  grid-template-columns: 100%;
  padding: 20px;
  justify-items: center;
  @media ${devices.tablet} {
    grid-template-columns: 50% 50%;
  }
`;

const Service = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  padding: 0 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;

const ServicesLayout = ({ t, data, images }) => {
  return (
    <>
      <TitleSection
        title={t('services.services')}
        background="marble"
        color="blue"
      />
      <ServicesWrapper>
        {data.map(({ node }) => (
          <Service>
            <SmallTitle>{node.serviceName}</SmallTitle>
          </Service>
        ))}
      </ServicesWrapper>
      <ImageSection
        image={images['what.jpg']}
        title={t('services.services')}
        linkTo={'/services'}
      />
    </>
  );
};

export default withTrans(ServicesLayout);
