import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  // the above line is 'const post = data.markdownRemark' it pulls down markdownRemark from data and assigning it to post
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
// prop that is injected by GraphQL query to be rendered in the template

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
// the above is a query that says 'which of the markdown files has the same path I'm looking for?
