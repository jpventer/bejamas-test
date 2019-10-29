import React from 'react'

import Layout from '../components/Layout'

import { graphql } from 'gatsby'


import Img from 'gatsby-image'

import styled from 'styled-components'
import LogosWidget from '../components/LogosWidget'
import PostTilesWidget from '../components/PostTilesWidget'
import HeroComponent from '../components/HeroComponent'
import IntroComponent from '../components/IntroComponent'

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


const IndexPageTemplate = ({ pageContent }) => (
  <>
    <HeroComponent content={pageContent.markdownRemark.frontmatter.hero} />
    <IntroComponent content={pageContent.markdownRemark.frontmatter.intro} />
    <LogosWidget logos={pageContent.markdownRemark.frontmatter.logos} />
    <PostTilesWidget />
  </>
);

IndexPageTemplate.propTypes = {}


const IndexPage = (props) => (
  <Layout>
      <IndexPageTemplate pageContent={props.data} />            
  </Layout>
)

IndexPage.propTypes = {}

export default IndexPage
