import React from 'react'
import {useDispatch} from 'react-redux';
import MenuNavbar from '../menu-navbar/MenuNavbar'
import { connect } from 'react-redux'
import Footer from '../footer/Footer'
import {StyledMainContainer} from './style'
import CharacterForm from '../character-form/CharacterForm'
import { Toggle } from '../toggle/Toggle'
import { showToggle, hideToggle } from '../toggle/ToggleActions'

const CharacterDetails = props => {
    const dispatch = useDispatch();
    const toggleId = 'characterFormComponent';
    const char = props.location.state.char

    return(
        <>
            <MenuNavbar/>
                <StyledMainContainer>
                    <Toggle id={'characterDetailsComponent'}>
                        <div className="card">
                            <div className="identifier">
                                <span>{char.name}</span>
                            </div>
                            <div class="appearance">
                                <ul>
                                    <li>Gender: {char.appearance.gender}</li>
                                    <li>Race: {char.appearance.race}</li>
                                </ul>
                            </div>
                            <div class="image-char">
                                <img src={char.images.sm} />
                            </div>
                            <div class="powerstats">
                                <ul>
                                    <li>Intelligence: {char.powerstats.intelligence}</li>
                                    <li>Strength: {char.powerstats.strength}</li>
                                    <li>Speed: {char.powerstats.speed}</li>
                                    <li>Durability: {char.powerstats.durability}</li>
                                    <li>Power: {char.powerstats.power}</li>
                                    <li>Combat: {char.powerstats.combat}</li>
                                </ul>

                                    <button onClick={() => {
                                        dispatch(showToggle('characterFormComponent'));
                                        dispatch(hideToggle('characterDetailsComponent'))}
                                        }>
                                    edit <span class="material-icons">keyboard_arrow_right</span></button>

                            </div>
                        </div>
                    </Toggle>
                    <Toggle id={'characterFormComponent'}>
                        <CharacterForm state={char}/>
                    </Toggle>
                </StyledMainContainer>
            <Footer/>
        </>
    )
}


const  mapStateToProps = state => ({characters: {...state.list.characters}})

export default connect(mapStateToProps)(CharacterDetails)