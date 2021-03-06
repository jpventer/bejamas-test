import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Toggle from '../components/Toggle'

const StyledMenu = styled.div`

    height: ${({ theme }) => theme.menuHeight};
    background-color: ${({ theme }) => theme.body};
    box-shadow: 0px 2px 12px #0000001D;
    position:fixed;
    width: 100%;
    z-index: 2;

    .hamburgerMenu, .siteLogo.mobile{
        display:none;
    }

    .themeToggle{
        position: absolute;
        right: 1%;
        top: 50%;
        transform: translateY(-50%);
    } 

    nav{
        height: inherit;
        display:flex;
        align-items:center;
        max-width:769px;
        width:100%;
        justify-content:space-evenly;
        margin: 0 auto;

        a{
            text-decoration:none;
            font-weight: 600;
            font-size: 2rem;
            line-height: 2.4rem;
            letter-spacing: 0;
            color: ${({ theme }) => theme.linksColor};
            position: relative;
            height: inherit;
            width:min-content;
            display:flex;
            align-items:center;
            overflow-y:hidden;

            .half-moon{
                width: 1.4rem;
                height: 1.4rem;
                background: #4285BC;
                border-radius: 2.8rem;
                position: absolute;
                left: 50%;
                transform: translate(-50%, 50%);
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

        img{
            height: 4rem;
            width:auto;
        }

        .siteLogo.main{
            display:block;
        }

              


        /* nav responsive */

         @media screen and (max-width:768px) {
            display:flex;
            flex-direction:column;
            justify-content:center;
            padding-left:4.2rem;
            background-color: ${({ theme }) => theme.body};
            height:100vh;
            transform:translateX(-100%);
            transition: 0.4s transform ease-out;

            &.open{
                transform:translateX(0%);
            }
                    
            .siteLogo.main{
                display:none;
            }            

            a{

                height: ${({ theme }) => theme.menuHeight};
                width:100%;
                
                .label{
                    margin-left: 2rem;
                }

                .half-moon{                    
                    left: 0%;
                    top:50%;
                    transform: translateY(-50%);
                    width: 0.8rem;
                    height: 0.8rem;
                }

            }


        } 

    }

    @media screen and (max-width:768px) {

        .hamburgerMenu{
            cursor: pointer;
            display: flex;
            height: ${({ theme }) => theme.menuHeight};
            align-items: center;
            padding-left:4.2rem;
            box-shadow: 0px 2px 12px #0000001D;
            z-index: 2;
            position: absolute;
            width: 100%;
            

            img{
                width:1.7rem;
                height:1rem;
            }

            &.open{              

                img{
                    width:1.2rem;
                    height:1.2rem;
                }
            }
        }

        .siteLogo.mobile{
            position:absolute;
            top:12px;
            left:50%;
            transform: translateX(-50%);
            display:block;
            z-index:3;
        }

        .themeToggle{
            display:none;
        }
    }   

`



const Menu = ( { toggleTheme, theme }) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const data = useStaticQuery(graphql`
    {
        siteLogo: file(relativePath: {eq: "siteIcon.svg"}) {
          publicURL
        }
        mobileMenuOpen: file(relativePath: {eq: "menuOpen.svg"}) {
          publicURL
        }
        mobileMenuClosed: file(relativePath: {eq: "menuClosed.svg"}) {
          publicURL
        }
      }
  `)

    return(
        <StyledMenu   >

            <div className={`hamburgerMenu ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <img src={mobileMenuOpen ? data.mobileMenuOpen.publicURL : data.mobileMenuClosed.publicURL } alt="menu icon" />
            </div>

            <img className="siteLogo mobile" src={data.siteLogo.publicURL} alt="site logo" />

            <nav className={`${mobileMenuOpen ? 'open' : ''}`}>               

                <Link to="/" activeClassName="active">
                    <span className="label">Home</span>
                    <span className="half-moon"></span>
                </Link>

                <Link to="/products/" activeClassName="active">
                    <span className="label">Products</span>
                    <span className="half-moon"></span>
                </Link>

                <img className="siteLogo main" src={data.siteLogo.publicURL} alt="site logo" />

                <Link to="/blog/2019-08-15-another-blog-post-for-customers/" activeClassName="active">
                    <span className="label">Blog</span>
                    <span className="half-moon"></span>
                </Link>

                <Link to="/contact/" activeClassName="active">
                    <span className="label">Contact</span>
                    <span className="half-moon"></span>
                </Link>

            </nav>
            <Toggle toggleTheme={toggleTheme} theme={theme} className='themeToggle' />
        </StyledMenu>
    )    

}


export default Menu
