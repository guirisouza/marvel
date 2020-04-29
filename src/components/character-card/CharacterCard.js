import React from 'react'
import {StyledContainerCard} from './style'

const CharacterCard = state => {
    return(
        <>
            <StyledContainerCard props={state.char.images.sm} className="container-card">
                <div>
                    <span>{state.char.name}</span>
                </div>
            </StyledContainerCard>
        </>
    )
}

export default CharacterCard