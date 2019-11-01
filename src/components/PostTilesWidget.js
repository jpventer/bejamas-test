import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import SiteButton from './SiteButton'
import uuid from 'uuid/v4'

const StyledPostTileContainer = styled.div`
     display: flex;
     flex-wrap:wrap;

     margin-top:2.4rem;
     margin-bottom: 2.4rem;

     justify-content:center;

     margin-top:17rem;  
 
`

const StyledPostTile = styled.div`
    width:282px;
    min-width:282px;
    height:255px;
    background-color: white;
    box-shadow: 0px 2px 16px #394E5D36;
    border-radius: 4px;
    transition: 0.2s transform ease;
    margin:1.2rem;

    @media screen and (max-width:649px) {
      width:100%;
      margin-left:0;
      margin-right:0;
      margin-top:4.8rem;

      display:none;

      &:nth-child(-n + 2) {
        display:block;
      }
    }
      

    &:hover{
      transform: scale(1.05);
    }

    a{
        text-decoration:none;    

        .post-image{
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          max-height:144px;
        }

        .summary-block{
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 2rem;
            padding-bottom: 1rem;
        
            

            h5{
                font-weight: 600;
                font-size: 2rem;
                line-height:2.7rem;
                letter-spacing: 0;
                color: #394E5D; 
                margin-bottom: 1rem;

                 white-space: nowrap;
                 overflow: hidden;
                 text-overflow: ellipsis;   
            }

            p{
                font: Regular 16px/19px Montserrat;
                font-size: 1.6rem;
                line-height:1.9rem;
                letter-spacing: 0;
                color: #182333;
            }
        }
    }
`

const StyledReadMore = styled.div`    

  margin-top: 4.5rem;
  text-align: center;

  .blue-pill-button{
    grid-column-start: span 4;
    justify-self: center;
  }

`

const PostTilesWidget = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 4) {
        edges {
          node {
            frontmatter {
              title
              path
              featuredimage {
                childImageSharp {
                  fluid(maxHeight: 144) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt(pruneLength: 50)
          }
        }
      }
      }
  `)

  return (
      <>
        <StyledPostTileContainer className="container boxed" >

            { data.allMarkdownRemark.edges.map((post) => (                
                <StyledPostTile key={uuid()}>
                    <Link to={post.node.fields.slug}>
                        <Img className="post-image" fluid={post.node.frontmatter.featuredimage.childImageSharp.fluid} alt={post.node.frontmatter.title} />
                        <div className="summary-block">
                            <h5>{post.node.frontmatter.title}</h5>
                            <p>{post.node.excerpt}</p>                
                        </div>
                    </Link>
                </StyledPostTile>
            ))}
            
        </StyledPostTileContainer>
        
        <StyledReadMore>
            <SiteButton className="blue-pill-button" to="#" >Read More </SiteButton>
        </StyledReadMore>
        
    </>
    
  )
}

PostTilesWidget.propTypes = {}

export default PostTilesWidget