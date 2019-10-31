import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

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

const StyledBlogPostTemplate = styled.article`

  header{

    margin-bottom:4.8rem;
    margin-top:17rem;

    time{
      font-weight:600;
    }
  }

  article{
    max-width:1200px;

    p{
      margin-top: 2.4rem;
      margin-bottom: 2.4rem;    
    }

    h2{
        font-weight: 600;
    }

    ul{
      margin-left: 4rem;
      margin-bottom: 2.4rem;
    }
  }

`

export function BlogPostTemplate( { post } ) {
  
  return (
    <StyledBlogPostTemplate className="container boxed">
      <header>
        <h1 className="title header3">{post.frontmatter.title}</h1>
        <time>{post.frontmatter.date}</time>
      </header>
      <article dangerouslySetInnerHTML={{__html: post.html }}></article>
    </StyledBlogPostTemplate>
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
