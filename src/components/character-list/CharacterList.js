import React from 'react'
import CharacterCard from '../character-card/CharacterCard'
import {SyledFullContainer, StyledHeaderLogo, StyledScrollerContainer, StyledInputSearch,StyledContainerSearchBox} from './style'
const CharacterList = () => {
    return (
        <>  
            <StyledHeaderLogo>
                <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png" />
            </StyledHeaderLogo>
            <SyledFullContainer>
                <StyledContainerSearchBox>
                    <span class="material-icons">search</span>
                    <StyledInputSearch type="input" placeholder="Character Search..."/>
                </StyledContainerSearchBox>
                <StyledScrollerContainer>
                    <CharacterCard></CharacterCard>
                    <CharacterCard></CharacterCard>
                    <CharacterCard></CharacterCard>
                    <CharacterCard></CharacterCard>
                </StyledScrollerContainer>
            </SyledFullContainer>
        </>
    )
}

export default CharacterList