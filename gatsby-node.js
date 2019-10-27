const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const IndexPageTemplate = path.resolve(`src/templates/index-page.js`)
  const AboutPageTemplate = path.resolve(`src/templates/about-page.js`)
  const BlogPostPageTemplate = path.resolve(`src/templates/blog-post.js`)
  const ContactPageTemplate = path.resolve(`src/templates/contact-page.js`)
  const ProductsPageTemplate = path.resolve(`src/templates/products-page.js`)
  const TemplateKeys = {
    'about-page' : AboutPageTemplate,
    'index-page' : IndexPageTemplate,
    'blog-post'  : BlogPostPageTemplate,
    'contact-page' : ContactPageTemplate,
    'products-page' : ProductsPageTemplate
  }


  const result = await graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            templateKey
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {    
    createPage({
      path: node.fields.slug,
      component: TemplateKeys[node.frontmatter.templateKey],
      context: {
        slug: node.fields.slug
      },
    })
  })
}



exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}





