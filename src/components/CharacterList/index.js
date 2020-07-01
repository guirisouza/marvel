import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import CharacterCard from '../CharacterCard/index'
import { useDispatch } from 'react-redux'
import {StyledMainContainer, StyledCardListContainer, StyledLoader} from './styles'
import {loadCharList, searchCharAction} from './actions'


const CharacterList = state => {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(state.characters.length === 0) {
            dispatch(loadCharList())
        } 
    },[])

    const searchChar = (event) => {
        dispatch(searchCharAction(event.target.value))
    }

    return(
        <>
            {
                state.characters.length <= 0 ?
                <StyledLoader>loading...</StyledLoader>
                :
                <StyledMainContainer className="content">
                <div className="character-search">
                    <span className="material-icons">search</span>
                    <input data-testid="search-field" onChange={searchChar} placeholder="search by name" type="text"></input>
                </div>
                <StyledCardListContainer>
                {
                    state.filteredCharacters.length > 0 ?
                    state.filteredCharacters.map((char, index)=>{
                        return(
                                <CharacterCard key={index} char={char}></CharacterCard>
                        )
                    })
                    : 
                    state.characters.map((char, index)=>{
                        return(
                            <CharacterCard key={index} char={char}></CharacterCard>
                        )
                    })
                }
                </StyledCardListContainer>
            </StyledMainContainer>
            }
        </>
    )
}

const  mapStateToProps = state => ({characters: state.list.characters, filteredCharacters: state.list.filteredCharacters})

export default connect(mapStateToProps)(CharacterList)