import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"

export default () => {
  
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  allWordpressPost($id: String!) {
    edges {
        node {
            title
            excerpt
            content
            slug
        }
    }
  }
`

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      slug
  }
`