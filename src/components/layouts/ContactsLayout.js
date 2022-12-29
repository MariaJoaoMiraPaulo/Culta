import * as React from 'react';
import { withTrans } from '../../i18n/withTrans';
import ImageSection from '../sections/ImageSection';

const ContactsLayout = ({ t, images }) => {
  return (
    <>
      <ImageSection
        image={images['pilares.jpg']}
        title={t('about.about')}
        linkTo={'/about'}
      />
    </>
  );
};

export default withTrans(ContactsLayout);
