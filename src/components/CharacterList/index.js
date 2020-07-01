import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import CharacterCard from '../CharacterCard/index'
import { useDispatch } from 'react-redux'
import {StyledMainContainer, StyledCardListContainer, StyledLoader, StyledPaginationBar} from './styles'
import {loadCharList, searchCharAction} from './actions'


const CharacterList = state => {
    const [currentPage, setCurrentPage] = useState(1)
    const [charsPerPage] = useState(30)

    const handleClick = (event) => {
        console.log('clicou', event)
        setCurrentPage(event.target.id)
    }

    const dispatch = useDispatch()
    useEffect(()=>{
        if(state.characters.length === 0) {
            dispatch(loadCharList())
        } 
    },[])

    const searchChar = (event) => {
        dispatch(searchCharAction(event.target.value))
    }

    const indexOfLastChar = currentPage * charsPerPage;
    const indexOfFirstChar = indexOfLastChar - charsPerPage;
    const currentChars = state.characters.slice(indexOfFirstChar, indexOfLastChar);

    const pagePaginationNumbers = []
    for (let i = 1; i <= Math.ceil(state.characters.length / charsPerPage); i++) {
        pagePaginationNumbers.push(i);
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
                    currentChars.map((char, index)=>{
                        return(
                            <CharacterCard key={index} char={char}></CharacterCard>
                        )
                    })
                }
                </StyledCardListContainer>
                <StyledPaginationBar>
                {
                    pagePaginationNumbers.map(number => {
                        return (
                            <li
                            key={number}
                            id={number}
                            onClick={handleClick}
                            >
                            {number}
                            </li>
                        );
                    })
                }
            </StyledPaginationBar>
            </StyledMainContainer>
            }
        </>
    )
}

const  mapStateToProps = state => ({characters: state.list.characters, filteredCharacters: state.list.filteredCharacters})

export default connect(mapStateToProps)(CharacterList)