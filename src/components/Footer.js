import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    height: 6rem;
    background-color: #4296CB;

    small{
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.8rem;
        letter-spacing: 0;
        color: #FFFFFF;
    }

`

const Footer = () => (
    <StyledFooter>
        <div className="container boxed">
            logo
            <small>All rights reserved ©</small>
        </div>
    </StyledFooter>
)


export default Footer