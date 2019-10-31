import React from 'react'

import Layout from '../components/Layout'

import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(fromNow: true)
      }
      html
    }
  }
`

export function BlogPostTemplate( { post } ) {
  
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <h1>{post.frontmatter.date}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html }}></div>
    </>
  )
}

BlogPostTemplate.propTypes = {}

function BlogPost( { data } ) {
  const post = data.markdownRemark
  return (
    <Layout>      
      <BlogPostTemplate post={post} />
    </Layout>
  )
}

BlogPost.propTypes = {}

export default BlogPost
