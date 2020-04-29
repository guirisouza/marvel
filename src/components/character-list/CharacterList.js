import React, {useEffect} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import CharacterCard from '../character-card/CharacterCard'
import {StyledMainContainer} from './style'


const CharacterList = state => {
    
    useEffect(()=>{
        console.log('HEROEES: ', state.characters)
    },[])

    return(
        <>
        <StyledMainContainer className="content">
            {
                state.characters.map((char, index)=>{
                    return(
                        <CharacterCard key={index} char={char}></CharacterCard>
                    )
                })
            }
        </StyledMainContainer>
        </>
    )
}

const  mapStateToProps = state => ({characters: state.list.characters})

export default connect(mapStateToProps)(CharacterList)