import React from 'react'
import {StyledContainerCard} from './style'
import { Link } from 'react-router-dom';

const CharacterCard = state => {
    return(
        <>
        <Link to={{pathname: '/character-details', state:{char: state.char}}}>
            <StyledContainerCard props={state.char.images.sm} className="container-card">
                <div>
                    <span>{state.char.name}</span>
                </div>
            </StyledContainerCard>
        </Link>
        </>
    )
}

export default CharacterCard