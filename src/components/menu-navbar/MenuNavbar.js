import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/marvel-logo.png'
import {StyledHeader} from './style'

const MenuNavBar = () => {
    return (
        <>
            <StyledHeader className="header">
            <div>
                <Link to="/" className="logo"><img src={logo} alt="logo"/></Link>
            </div>
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