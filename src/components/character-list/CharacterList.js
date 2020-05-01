import React, {useEffect} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import CharacterCard from '../character-card/CharacterCard'
import { useDispatch } from 'react-redux'
import {StyledMainContainer} from './style'
import {loadCharList} from './characterListActions'


const CharacterList = state => {
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('quantidade',state.characters.length)
        if(state.characters.length === 0) {
            dispatch(loadCharList())
            console.log(state)
        } 
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