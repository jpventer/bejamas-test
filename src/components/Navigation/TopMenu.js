import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const StyledTopMenu = styled.div`

    display: flex;
    justify-content: center;
    height: 60px;
    box-shadow: 0px 2px 12px #0000001D;

    nav{
        ul{
            display: flex;
            justify-content: space-between;

            li {
                list-style-type: none;
            }
        }
    }
    
     
`

const TopMenu = () => {
    return(
        <StyledTopMenu>
            <nav>
               <ul>
                    <li>
                    <Link to="/" activeClassName="active">Home</Link>
                    <span className="half-moon"></span>
                    </li>
                    <li>
                    <Link to="/products/" activeClassName="active">Products</Link>
                    <span className="half-moon"></span>
                    </li>
                    <li>
                    <Link to="/about/" activeClassName="active">Image</Link>
                    <span className="half-moon"></span>
                    </li>
                    <li>
                    <Link to="/blog/" activeClassName="active">Blog</Link>
                    <span className="half-moon"></span>
                    </li>
                    <li>
                    <Link to="/contact/" activeClassName="active">Contact</Link>
                    <span className="half-moon"></span>
                    </li>
                </ul>
            </nav>
          </StyledTopMenu>
    )
}

TopMenu.propTypes = {}

export default TopMenu
