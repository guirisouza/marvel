const INITIAL_STATE = {
    characters: [],
    filteredCharacters: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHARACTER_LIST_LOADED':
            if(action.payload.data === undefined){
                return {...state, characters: 'teste'}
            } else {
                return {...state, characters: action.payload.data.slice(0, 40)}
            }
        case 'CUSTOMIZE_CHARACTER':
            const newState = {...state}
            newState.characters.map((char, index)=> {
                if(char['id'] === action.payload.id) {
                    newState.characters = action.payload.data
                    return {...state, characters: newState.characters}
                }
            })
        case 'SEARCH_CHARACTER':
            const newStateSearch = {...state}
            const filteredChars = newStateSearch.characters.filter(char => char.name.toLowerCase().indexOf(action.payload) > -1)
            return {...state, filteredCharacters: filteredChars}


        default: return state
    }
}