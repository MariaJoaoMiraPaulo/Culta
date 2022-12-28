import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import { withTrans } from '../../i18n/withTrans';

const ServicesLayout = ({ t }) => {
  return (
    <>
      <TitleSection
        title={t('services.services')}
        background="marble"
        color="blue"
      />
    </>
  );
};

export default withTrans(ServicesLayout);
