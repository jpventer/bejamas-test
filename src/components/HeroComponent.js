import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledHeroComponent = styled.div`
   
    display: grid;
    grid-template-columns: 55% 45%;
    height: 100vh;
    align-items: center;

    .left-content{
        max-width: 545px;
        justify-self: center;
    }

    .right-content{
        max-width:383px;
        width:100%;
    }

    @media screen and (max-width:1072px) {
        grid-template-columns: auto;
        grid-template-rows: auto;
        justify-items: center;
    } 

    @media(max-width: 480px) {        

        .left-content{
            width: 323px;
            align-self: flex-end;
            margin-bottom:1rem;
        }

        .right-content{
            width:262px;
            align-self: flex-start;
            margin-top:6.7rem;
        }
    } 
`

const HeroComponent = ( { content } ) => {
    return(
        <StyledHeroComponent className="container boxed">
                <div className="left-content">
                <h1 className="title header1">
                    {content.heading}
                </h1>
                <h2 className="title header2">
                    {content.subheading}
                </h2>
            </div>
            <div className="right-content">
               <Img fluid={content.image.childImageSharp.fluid} alt="hero 1 image" />
            </div>
        </StyledHeroComponent>
    )
}

HeroComponent.propTypes = {}

export default HeroComponent

