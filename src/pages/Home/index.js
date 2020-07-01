import React from 'react'
import MenuNavBar from '../../components/MenuNavbar/index'
import Footer from '../../components/Footer/index'
import CharacterList from '../../components/CharacterList/index'
import {StyledStructure} from './styles'

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