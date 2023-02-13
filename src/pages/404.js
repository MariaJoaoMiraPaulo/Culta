import React from 'react';
import ErrorLayout from '../components/ErrorLayout';
import { withTrans } from '../i18n/withTrans';

const NotFoundPage = ({ t }) => {
  return (
    <ErrorLayout
      title={t('errors.404.title')}
      description={t('errors.404.description')}
    />
  );
};

export default withTrans(NotFoundPage);

export const Head = () => <title>Not found</title>;
