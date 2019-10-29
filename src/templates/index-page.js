import React from 'react'

import Layout from '../components/Layout'

import { graphql } from 'gatsby'


import Img from 'gatsby-image'

import styled from 'styled-components'
import LogosWidget from '../components/LogosWidget'
import PostTilesWidget from '../components/PostTilesWidget'

export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      hero {
        heading
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 385) {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
      intro {
        description
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 236) {
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
      logos {
        link
        image {
          publicURL
        }
      }
    }
  }
}

`

const StyledIndexPageTemplate = styled.div`
  
  .intro-section{
    display: grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 60% 40%;
    row-gap:5.5rem;

    .title.header3 {
        grid-row-start: 1;
        grid-column-start: span 2;
        text-align:center;
    }

    .left-content{       
        max-width: 236px;
        justify-self: center;
        width: 100%;
    }

    .right-content{
      max-width:545px;
      align-self: center;
    }

    

  }

`

const IndexPageTemplate = ({ pageContent }) => (
  <StyledIndexPageTemplate>
    <div className="container boxed hero1">
      <div className="left-content">
        <h1 className="title hero1">
          {pageContent.markdownRemark.frontmatter.hero.heading}
        </h1>
        <h2 className="title hero1-subtitle">
          {pageContent.markdownRemark.frontmatter.hero.subheading}
        </h2>
      </div>
      <div className="right-content">
        <Img
          fluid={pageContent.markdownRemark.frontmatter.hero.image.childImageSharp.fluid}
          alt="hero 1 image"
        />
      </div>
    </div>

    <div className="container boxed intro-section">
      <h3 className="title header3">
        {pageContent.markdownRemark.frontmatter.intro.heading}
      </h3>

      <div className="left-content">
        <Img
          fluid={pageContent.markdownRemark.frontmatter.intro.image.childImageSharp.fluid}
          alt="new product, new story"
        />
      </div>

      <div className="right-content">
        <h4 className="title header4">TODO: New Product, new Story</h4>
        <div
          className="normal-copy"
          dangerouslySetInnerHTML={{
            __html: pageContent.markdownRemark.frontmatter.intro.description
          }}
        ></div>
      </div>
    </div>

    <LogosWidget logos={pageContent.markdownRemark.frontmatter.logos} />
    <PostTilesWidget />

  </StyledIndexPageTemplate>
);

IndexPageTemplate.propTypes = {}


const IndexPage = (props) => (
  <Layout>
      <IndexPageTemplate pageContent={props.data} />            
  </Layout>
)

IndexPage.propTypes = {}

export default IndexPage
