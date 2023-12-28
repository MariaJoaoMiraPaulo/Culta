import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Helmet } from 'react-helmet';

export const Seo = ({
  title,
  description,
  pathname,
  imagePath,
  fullImageUrl,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: fullImageUrl
      ? fullImageUrl
      : imagePath
      ? `${siteUrl}${imagePath}`
      : image,
    url: pathname ? `${siteUrl}/${pathname}` : siteUrl,
  };

  return (
    <Helmet title={seo.title}>
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />

      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
};
