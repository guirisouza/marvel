import React from 'react'
import {StyledContainerCard} from './styles'
import { Link } from 'react-router-dom';

const CharacterCard = state => {
    return(
        <>
        <Link to={{pathname: '/character-details', state:{char: state.char}}}>
            <StyledContainerCard data-testid="character-card" props={state.char.images.sm} className="container-card">
                <div>
                    <span>{state.char.name}</span>
                </div>
            </StyledContainerCard>
        </Link>
        </>
    )
}

export default CharacterCard