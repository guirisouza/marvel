import React from 'react'
import MenuNavbar from '../menu-navbar/MenuNavbar'
import Footer from '../footer/Footer'
import {StyledMainContainer} from './style'

const CharacterDetails = () => {
    return(
        <>
            <MenuNavbar/>
                <StyledMainContainer>
                    <div className="card">
                        <div className="identifier">
                            <span>Name</span>
                            <span>Fullname</span>
                        </div>
                        <div class="appearance">
                            <ul>
                                <li>Gender</li>
                                <li>Race</li>
                            </ul>
                        </div>
                        <div class="image-char">
                            <img src="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg" />
                        </div>
                        <div class="powerstats">
                            <ul>
                                <li>intelligence</li>
                                <li>strength</li>
                                <li>speed</li>
                                <li>durability</li>
                                <li>power</li>
                                <li>combat</li>
                            </ul>
                            <div className="edit-button">
                                <span class="material-icons">edit</span> edit
                            </div>
                        </div>
                    </div>
                </StyledMainContainer>
            <Footer/>
        </>
    )
}

export default CharacterDetails