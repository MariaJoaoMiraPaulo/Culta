export const getImagesMappedByName = data => {
  const images = {};

  data.forEach(
    ({ node }) => (images[node.fluid.originalName] = node.gatsbyImageData),
  );

  return images;
};

export const getArrayOfBannerImages = data =>
  data.map(({ node: { childImageSharp } }) => childImageSharp.gatsbyImageData);
