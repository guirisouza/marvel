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
                const charsStorage = window.localStorage.getItem('characters')
                if (charsStorage) {
                    const charsStorageParsed = JSON.parse(charsStorage)
                    return {...state, characters: charsStorageParsed }
                } else {
                    const chars = action.payload.data
                    window.localStorage.setItem('characters', JSON.stringify(chars))
                    return {...state, characters: chars }
                }

            }
        case 'CUSTOMIZE_CHARACTER':
            const newState = {...state}
            window.localStorage.setItem('characters', JSON.stringify(newState.characters))

        case 'SEARCH_CHARACTER':
            const newStateSearch = {...state}
            console.log(action.payload)
            if (action.payload.length >= 3) {
                const filteredChars = newStateSearch.characters.filter(char => char.name.toLowerCase().indexOf(action.payload) > -1)
                return {...state, filteredCharacters: filteredChars}
            } else {
                const filteredChars = newStateSearch.characters.filter(char => char.name.toLowerCase().indexOf('00000000') > -1)
                return {...state, filteredCharacters: filteredChars}
            }
        default: return state
    }
}