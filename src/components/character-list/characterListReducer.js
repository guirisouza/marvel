import update from 'react-addons-update'
const INITIAL_STATE = {
    characters: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHARACTER_LIST_LOADED':
            console.log('disparou')
            return {...state, characters: action.payload.data.slice(0, 40)}
        case 'CUSTOMIZE_CHARACTER':
            const newState = {...state}
            console.log(action.payload.id)
            newState.characters.map((char, index)=> {
                if(char['id'] === action.payload.id) {
                    console.log('iguaallllll')
                    newState.characters = action.payload.data
                    return {...state, characters: newState.characters}
                }
            })
        default: return state
    }
}