import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"


const StyledToggle = styled.button`

      border-radius: 3.2rem;
      border: 1px solid #3D86BF;

      color: #4285BC;
      background-color: inherit;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.7rem;
      cursor: pointer;
      width: 6rem;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      padding: 0.5rem;
      position: relative;

      &:focus{
        outline: none;
      }


    img{
        width: 2rem;
        height: 2rem;

        transition: all 0.3s linear;

        &.sunIcon{
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
        }

        &.moonIcon{
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
        }
    }
`

const Toggle = ({ theme, toggleTheme, className }) => {
    const isLight = theme === 'light'

    const data = useStaticQuery(graphql`
    {
      sunIcon: file(relativePath: {eq: "light.svg"}) {
        publicURL
      },
      moonIcon: file(relativePath: {eq: "dark.svg"}) {
        publicURL
      }
    }
  `)

    return(
        <StyledToggle onClick={toggleTheme} lightTheme={isLight} className={className}>
            <img className="sunIcon" src={data.sunIcon.publicURL} alt="sun" />
            <img className="moonIcon" src={data.moonIcon.publicURL} alt="moon" />
        </StyledToggle>
    )
}


Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
    className: string
  }

export default Toggle