export const getImagesMappedByName = data => {
  const images = {};

  data.forEach(
    ({ node }) => (images[node.fluid.originalName] = node.gatsbyImageData),
  );

  return images;
};

export const getArrayOfBannerImages = data => {
  const imagesArray = [];
  data.map(({ node }) => {
    imagesArray.push(node.childImageSharp.gatsbyImageData);
  });
  return imagesArray;
};
