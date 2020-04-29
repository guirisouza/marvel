import React from 'react'
import MenuNavBar from '../menu-navbar/MenuNavbar'
import Footer from '../footer/Footer'
import CharacterList from '../character-list/CharacterList'
import {StyledStructure} from './style'

const Home = () => {
    return (
        <>  
            <StyledStructure>
                <MenuNavBar/>
                <CharacterList/>
                <Footer className="footer"/>
            </StyledStructure>
        </>
    )
}

export default Home