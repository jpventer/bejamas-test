import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledIntroComponent = styled.div`
    display: grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 60% 40%;
    row-gap:5.5rem;  

    .title.header3 {
        grid-row-start: 1;
        grid-column-start: span 2;
        justify-self:center;
       
        @media screen and (max-width: 786px) {
          text-align:left;
        }
    }

    .left-content{       
        max-width: 236px;
        justify-self: center;
        width: 100%;

        @media screen and (max-width: 786px) {
          display:none;
        }
    }

    .right-content{
      max-width:545px;
      align-self: center;
    }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
    }
`

const IntroComponent = ({ content }) => {
    return(
        <StyledIntroComponent className="container boxed">
            <h3 className="title header3">
                {content.heading}
            </h3>

            <div className="left-content">
               <Img fluid={content.image.childImageSharp.fluid} alt="new product, new story" />
            </div>

            <div className="right-content">
                <h4 className="title header4">TODO: New Product, new Story</h4>
                <div
                className="normal-copy"
                dangerouslySetInnerHTML={{
                    __html: content.description
                }}
                ></div>
            </div>
        </StyledIntroComponent>
    )
}

IntroComponent.propTypes = {}

export default IntroComponent