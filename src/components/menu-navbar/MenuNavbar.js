import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/marvel-logo.png'
import {StyledHeader} from './style'

const MenuNavBar = () => {
    return (
        <>
            <StyledHeader className="header">
            <Link to="/">
                <a className="logo"><img src={logo} alt="logo"/></a>
            </Link >
            <nav>
                <ul>
                    <li><a>About Me</a></li>
                </ul>
            </nav>
            </StyledHeader>
        </>
    )
}

export default MenuNavBar