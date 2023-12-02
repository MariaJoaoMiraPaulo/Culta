const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query BlogPostsQuery {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            title
            createdAt
            article {
              raw
            }
            tags {
              name
            }
            backgroundImage {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const blogPosts = result.data.allContentfulBlogPost.edges;
  const postsPerPage = 4;
  const numPages = Math.ceil(blogPosts.length / postsPerPage);

  const blogTemplate = path.resolve(`./src/templates/blog.js`);

  Array.from({ length: numPages }).forEach((_, i) => {
    const withPrefix = pageNumber =>
      pageNumber === 1 ? `/blog` : `/blog/${pageNumber}`;
    const pageNumber = i + 1;
    createPage({
      path: withPrefix(pageNumber),
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        current: pageNumber,
        total: numPages,
        hasNext: pageNumber < numPages,
        nextPath: withPrefix(pageNumber + 1),
        hasPrev: i > 0,
        prevPath: withPrefix(pageNumber - 1),
      },
    });
  });
};
