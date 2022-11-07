import * as React from 'react';

const IndexPage = () => {
/*   const data = useStaticQuery(
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
  );

  console.log(data); */
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

export default IndexPage;
