import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import { withTrans } from '../../i18n/withTrans';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { SmallTitle, Body } from '../../styles/typographyComponents';

const ServicesWrapper = styled.div`
  display: grid;
  margin: 0 2rem 10rem 2rem;
  grid-template-columns: 100%;
  padding: 2rem;
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
  min-height: 20vh;
  cursor: default;

  span {
    display: none;
  }

  &: hover {
    h2 {
      display: none;
    }
    span {
      display: fixed;
    }
  }
`;

const ServicesLayout = ({ t, data }) => {
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
            <Body>{node.serviceDescription.serviceDescription}</Body>
          </Service>
        ))}
      </ServicesWrapper>
    </>
  );
};

export default withTrans(ServicesLayout);
