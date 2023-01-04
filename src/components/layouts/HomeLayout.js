import * as React from 'react';
import TitleSection from '../sections/TitleSection';
import ImageSection from '../sections/ImageSection';
import TextSection from '../sections/TextSection';
import { withTrans } from '../../i18n/withTrans';

const HomeLayout = ({ t, images }) => {
  return (
    <>
      <TitleSection
        title={t('homepage.title')}
        background="red"
        color="marble"
        paddingBottom="3.5rem"
        paddingTop="4.5rem"
      />
      <TextSection
        body={t('homepage.about.body')}
        linksTo=""
        background="red"
        color="marble"
        centered="true"
        padding="20%"
      />
      <ImageSection
        image={images['what.jpg']}
        title={t('homepage.what.title')}
        linkTo={'/services'}
      />
      <ImageSection
        image={images['proud.jpg']}
        title={t('homepage.proud.title')}
        linkTo={'/blog'}
      />
    </>
  );
};

export default withTrans(HomeLayout);
