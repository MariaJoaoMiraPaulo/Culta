const path = require('path');
const BLOG_POSTS_PER_PAGE = 6;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // BLOG POSTS
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
  const postsPerPage = BLOG_POSTS_PER_PAGE;
  const numBlogPostsPages = Math.ceil(blogPosts.length / postsPerPage);
  const blogTemplate = path.resolve(`./src/templates/blog.js`);

  Array.from({ length: numBlogPostsPages }).forEach((_, i) => {
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
        total: numBlogPostsPages,
        hasNext: pageNumber < numBlogPostsPages,
        nextPath: withPrefix(pageNumber + 1),
        hasPrev: i > 0,
        prevPath: withPrefix(pageNumber - 1),
      },
    });
  });
};
