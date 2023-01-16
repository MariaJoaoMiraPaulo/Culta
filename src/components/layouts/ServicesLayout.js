import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import ImageSection from '../sections/ImageSection';
import ImageTextSection from '../sections/ImageTextSection';
import { withTrans } from '../../i18n/withTrans';
import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { SubTitle2, Body } from '../../styles/typographyComponents';
import services from '../../data/services';

const ServicesWrapper = styled.div`
  display: grid;
  margin: 0 1rem 2rem 1rem;
  grid-template-columns: 100%;
  justify-items: center;
  @media ${devices.laptop} {
    grid-template-columns: 50% 50%;
    margin: 3rem 2rem 5rem 2rem;
  }
`;

const Service = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  display: flex;
  align-items: center;
  cursor: default;
  margin-bottom: 3rem;

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

  @media ${devices.tablet} {
    padding: 0 4rem;
    margin-bottom: 6rem;
  }
`;

const ServicesLayout = ({ t, images }) => {
  return (
    <>
      <TitleSection
        padding="4rem 1rem"
        paddingMobile="1rem 0rem"
        title={t('services.services')}
        background="marble"
        color="blue"
      />
      <ImageTextSection
        color="blue"
        body={t('services.body')}
        image={images['services.jpg']}
        imageAlt={t('services.services')}
        padding="0"
        paddingMobile="1rem 0"
        hide="true"
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
