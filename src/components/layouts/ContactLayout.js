import * as React from 'react';
import { withTrans } from '../../i18n/withTrans';
import ContactForm from '../ContactForm';
import ImageSection from '../sections/ImageSection';
import TitleSection from '../sections/TitleSection';

const ContactLayout = ({ t, images }) => {
  return (
    <>
      <TitleSection
        title={t('contact.title')}
        background="marble"
        color="blue"
      />
      <ContactForm />
      <ImageSection
        image={images['pilares.jpg']}
        title={t('about.about')}
        linkTo={'/about'}
      />
    </>
  );
};

export default withTrans(ContactLayout);
