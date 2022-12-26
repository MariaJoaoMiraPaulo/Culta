export const getImagesMappedByName = data => {
  const images = {};

  data.allImageSharp.edges.forEach(
    ({ node }) => (images[node.fluid.originalName] = node.gatsbyImageData),
  );

  return images;
};
