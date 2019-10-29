import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const StyledFooter = styled.footer`
    height: 6rem;
    background-color: #4296CB;
    margin-top:17rem;
    position: fixed;
    bottom: 0;
    width: 100%;

    @media screen and (max-width: 480px) {
        margin-top:8.6rem;
    }
   

    .container{

        display: flex;
        align-items:center;
        padding-left:14rem;
        padding-right:14rem;
        height: inherit;

        small{
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 1.8rem;
            letter-spacing: 0;
            color: #FFFFFF;
            margin-left:2rem;
        }
        @media screen and (max-width: 768px) {
            padding-left:0rem;
            padding-right:0rem;
            justify-content:center;
        }
    }

    

`

const Footer = () => {
    const data = useStaticQuery(graphql`
    {
      footerLogo: file(relativePath: {eq: "footerLogo.svg"}) {
        publicURL
      }
    }
  `)
 
    return (
        <StyledFooter>
                <div className="container boxed">
                    <img className="siteLogo" src={data.footerLogo.publicURL} alt="site logo" />
                    <small>All rights reserved ©</small>
                </div>
        </StyledFooter>
    )
}

export default Footer