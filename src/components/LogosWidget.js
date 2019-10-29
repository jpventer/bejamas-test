import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import isValidURL from '../lib/IsValidURL'


const StyledLogosComponent = styled.div`
    background-color: #F5F8FA;
    padding: 5rem 0;

    margin-top:20rem;
    
    .inner {
        display: grid;
        grid-auto-flow: column;
        justify-items: center;
        grid-column-gap:8.5rem;

        @media(max-width: 480px) {
            overflow-x: auto;
        }
    }
    
    

`

const LogosWidget = ( { logos } ) => (

    <StyledLogosComponent className="container full">

        <div className="container boxed inner">
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
