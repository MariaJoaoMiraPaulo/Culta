import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import ImageSection from '../sections/ImageSection';
import CultureAnimation from '../CultureAnimation';
import ImageTextSection from '../sections/ImageTextSection';
import { withTrans } from '../../i18n/withTrans';

const AboutLayout = ({ t, images }) => {
  return (
    <>
      <TitleSection title={t('about.title')} background="marble" color="blue" />
      <ImageTextSection
        color="blue"
        body={t('about.body')}
        title={t('about.about').toUpperCase()}
        image={images['pilares.jpg']}
        imageAlt={t('services.services')}
      />
      <CultureAnimation />
      <ImageSection
        image={images['what.jpg']}
        title={t('services.services')}
        linkTo={'/services'}
      />
    </>
  );
};

export default withTrans(AboutLayout);
