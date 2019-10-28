import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'




const StyledTopMenu = styled.div`

    height: 6rem;
    background-color: white;
    box-shadow: 0px 2px 12px #0000001D;
    position:fixed;
    width: 100%;
    z-index: 2;

    nav{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content:center;
        
        ul{
            display: grid;
            grid-template-columns: max-content max-content auto max-content max-content;
            column-gap: 5.4rem;
            justify-content: center;

            li {
                list-style-type: none;                        

                a{
                    text-decoration:none;
                    font-weight: 600;
                    font-size: 2rem;
                    line-height: 2.4rem;
                    letter-spacing: 0;
                    color: #394E5D;
                    position: relative;
                    height: 6rem;
                    display: flex;
                    align-items:center;

                    .half-moon{
                        width: 1.4rem;
                        height: 0.7rem;
                        background: #4285BC;
                        border-top-left-radius: 2.8rem;
                        border-top-right-radius: 2.8rem;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: 0;
                        display:none;
                    }

                    &:hover{
                        .half-moon{
                            display:block;
                            opacity: 0.5;
                        }                        
                    }

                     &.active{
                        pointer-events: none;
                        .half-moon{
                            display:block;
                        }
                    }                 
                }
            }

            .siteLogo{
                pointer-events: none;
                display:flex;
                align-content: center;
                
                img{
                    width:4.5rem;
                }                
            }
        }

        @media(max-width: 768px) {
           background-color:white;
          
            ul {
                grid-template-columns: max-content;
                grid-auto-rows: max-content;
                    li{
                        a{
                            .half-moon{
                                height: 1.4rem;
                                position: absolute;
                                left: 0;
                                border-radius: 50%;
                                bottom:50%;
                                transform:translateY(50%);
                                
                            }
                        }
                    }
            }                
            
        }
    }
    
     
`

const TopMenu = () => {

    const data = useStaticQuery(graphql`
    {
      siteLogo: file(relativePath: {eq: "siteIcon.svg"}) {
        publicURL
      }
    }
  `)

    return(
        <StyledTopMenu>
            <nav className="container boxed">
               <ul>
                    <li>
                        <Link to="/" activeClassName="active">
                            <span className="label">Home</span>
                            <span className="half-moon"></span>
                        </Link>                    
                    </li>
                    <li>
                        <Link to="/products/" activeClassName="active">
                            <span className="label">Products</span>
                            <span className="half-moon"></span>
                        </Link>
                    </li>
                    <li className="siteLogo">                      
                        <img  src={data.siteLogo.publicURL} alt="site logo" />                                   
                    </li>
                    <li>
                        <Link to="/blog/" activeClassName="active">
                            <span className="label">Blog</span>
                            <span className="half-moon"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact/" activeClassName="active">
                            <span className="label">Contact</span>
                            <span className="half-moon"></span>
                        </Link>
                    </li>
                </ul>
            </nav>
          </StyledTopMenu>
    )
}

TopMenu.propTypes = {}

export default TopMenu
