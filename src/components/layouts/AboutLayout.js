import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import ImageSection from '../sections/ImageSection';
import TextSection from '../sections/TextSection';
import ImageTextSection from '../sections/ImageTextSection';
import { withTrans } from '../../i18n/withTrans';

const AboutLayout = ({ t }) => {
  return (
    <>
      <TitleSection title={t('title')} background="marble" color="blue" />
      <ImageTextSection
        color="blue"
        body={t('about.body')}
        title={t('about.about').toUpperCase()}
        imagePath="/images/pilares.jpg"
      />
      <TextSection color="blue" body="cultura" />
      <ImageSection
        imagePath="/images/what.jpg"
        title={t('services.services')}
        linkTo={'/services'}
      />
    </>
  );
};

export default withTrans(AboutLayout);
