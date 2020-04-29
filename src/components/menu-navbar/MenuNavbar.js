import React from 'react'
import logo from '../../images/marvel-logo.png'
import {StyledHeader} from './style'

const MenuNavBar = () => {
    return (
        <>
            <StyledHeader className="header">
            <a className="logo"><img src={logo} alt="logo"/></a>
            <nav>
                <ul>
                    <li><a>About Project</a></li>
                    <li><a>About Me</a></li>
                </ul>
            </nav>
            </StyledHeader>
        </>
    )
}

export default MenuNavBar