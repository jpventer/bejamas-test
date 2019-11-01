import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
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
                ...GatsbyImageSharpFluid
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
                ...GatsbyImageSharpFluid
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

IndexPageTemplate.propTypes = {
  pageContent: PropTypes.object
}


const IndexPage = ({ data }) => (
  <Layout>
      <IndexPageTemplate pageContent={data} />            
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage
