import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'


const StyledLink = styled(Link)`
    
      padding: 1rem 3rem;
      border-radius: 3.2rem;
      border: 1px solid #3D86BF;

      color: #4285BC;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.7rem;
      text-decoration:none;
      width: max-content;

      &:hover{
          background-color: #3D86BF;
          color:white;
      }  

`


const SiteButton = ( { className = '' }) => (        
    <StyledLink className={className} to="#" >Read More</StyledLink>     
)

SiteButton.propTypes = {
 className: PropTypes.string
}


export default SiteButton
