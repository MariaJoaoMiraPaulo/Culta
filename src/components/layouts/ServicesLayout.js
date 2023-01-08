import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import ImageSection from '../sections/ImageSection';
import { withTrans } from '../../i18n/withTrans';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { SubTitle2, Body } from '../../styles/typographyComponents';
import services from '../../data/services';

const ServicesWrapper = styled.div`
  display: grid;
  margin: 0 2rem 5rem 2rem;
  grid-template-columns: 100%;
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

const ServicesLayout = ({ t, images }) => {
  return (
    <>
      <TitleSection
        padding="4rem 1rem"
        paddingMobile="4rem 1rem"
        title={t('services.services')}
        background="marble"
        color="blue"
      />
      <ServicesWrapper>
        {services.map(({ name, description }) => (
          <Service key={name}>
            <SubTitle2>{name}</SubTitle2>
            <Body>{description}</Body>
          </Service>
        ))}
      </ServicesWrapper>
      <ImageSection
        image={images['natureza.jpg']}
        title={t('contact.title')}
        linkTo={'/contact'}
      />
    </>
  );
};

export default withTrans(ServicesLayout);
