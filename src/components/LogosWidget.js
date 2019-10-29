import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import isValidURL from '../lib/IsValidURL'


const StyledLogosComponent = styled.div`
    background-color: #F5F8FA;
    padding: 5rem 0;
    margin-top:17rem;
    
    
    .inner-slide {        
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        overflow-x: auto;
        justify-content:center;
        ::-webkit-scrollbar {    
            display: none;
        }

        a{
            margin-left:4.2rem;
            margin-right:4.2rem;
        }

        @media screen and (max-width:768px) {
            justify-content:unset;
            margin: 0 auto;
        }
    }
    
    

`

const LogosWidget = ( { logos } ) => (

    <StyledLogosComponent className="container full">

        <div className="inner-slide">
        {logos.map(logo => {
            
            let url = logo.link;

            if(isValidURL(url)){
                return (
                    <a href={logo.link} target="_blank" rel="noopener noreferrer">
                        <img src={logo.image.publicURL} alt="logo link" />
                    </a>
                )
            }else{
                return (
                    <Link to={logo.link}>
                        <img src={logo.image.publicURL} alt="logo link" />
                    </Link>                    
                )
            }

        })}

        </div>        

    </StyledLogosComponent>
)


LogosWidget.propTypes = {}

export default LogosWidget
