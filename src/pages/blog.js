/* import { graphql, useStaticQuery } from 'gatsby';
 */import * as React from 'react';

const BlogPage = () => {
  /* const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              id
            }
          }
        }
      }
    `,
  ); */

  return (
    <div>
      <h1>BLOG POSTS</h1>
      <ul>
        {/* {data.allContentfulBlogPost.edges.map(({ node }) => (
          <li>{node.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default BlogPage;
