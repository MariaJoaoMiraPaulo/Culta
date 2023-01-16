import * as React from 'react';
import { withTrans } from '../../i18n/withTrans';
import ImageSection from '../sections/ImageSection';
import TitleSection from '../sections/TitleSection';
import FormTextSection from '../sections/FormTextSection';
import ContactForm from '../forms/ContactForm';

const ContactLayout = ({ t, images }) => {
  return (
    <>
      <TitleSection
        padding="4rem 1rem"
        paddingMobile="1rem 0rem"
        title={t('contact.title')}
        background="marble"
        color="blue"
      />
      <FormTextSection
        color="blue"
        body={t('contact.body')}
        padding="0 0 0 1rem"
        paddingMobile="1rem 0"
        width="80%"
      >
        <ContactForm />
      </FormTextSection>
      <ImageSection
        image={images['pilares.jpg']}
        title={t('about.about')}
        linkTo={'/about'}
      />
    </>
  );
};

export default withTrans(ContactLayout);
