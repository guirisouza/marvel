import React from 'react'
import {useDispatch} from 'react-redux';
import MenuNavbar from '../../components/MenuNavbar'
import { connect } from 'react-redux'
import Footer from '../../components/Footer'
import {StyledMainContainer} from './styles'
import CharacterForm from '../../components/CharacterForm/index'
import mockedChar from '../../utils/mock'
import { Toggle } from '../../components/Toggle/index'
import { showToggle, hideToggle } from '../../components/Toggle/actions'

const CharacterDetails = props => {
    let char = ''
    if(props.char){
        char = props.location.state.char
    }
    else {
        props.location === undefined 
        ? char = mockedChar
        : char = props.location.state.char
    }
    const dispatch = useDispatch();

    return(
        <>
            <MenuNavbar/>
                <StyledMainContainer >
                    <Toggle id={'characterDetailsComponent'}>
                        <div className="card">
                            <div  className="identifier">
                                <span data-testid="name-identifier">{char.name}</span>
                            </div>
                            <div className="appearance">
                                <ul>
                                    <li>Gender: {char.appearance.gender}</li>
                                    <li>Race: {char.appearance.race}</li>
                                </ul>
                            </div>
                            <div className="image-char">
                                <img src={char.images.sm} />
                            </div>
                            <div className="powerstats">
                                <ul>
                                    <li>Intelligence: {char.powerstats.intelligence}</li>
                                    <li>Strength: {char.powerstats.strength}</li>
                                    <li>Speed: {char.powerstats.speed}</li>
                                    <li>Durability: {char.powerstats.durability}</li>
                                    <li>Power: {char.powerstats.power}</li>
                                    <li>Combat: {char.powerstats.combat}</li>
                                </ul>

                                    <button data-testid="customizer-button" onClick={() => {
                                        dispatch(showToggle('characterFormComponent'));
                                        dispatch(hideToggle('characterDetailsComponent'))}
                                        }>
                                    Customizer <span className="material-icons">keyboard_arrow_right</span></button>

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