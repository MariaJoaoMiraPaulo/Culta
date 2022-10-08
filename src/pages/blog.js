import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const IndexPage = () => {
  const data = useStaticQuery(
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

  return (
      <h1>
        BLOG
      </h1>
  )
}

export default IndexPage