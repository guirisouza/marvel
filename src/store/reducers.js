import { combineReducers } from 'redux'
import characterListReducer from '../components/character-list/characterListReducer'
import toggleReducer from '../components/toggle/toggleReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    list: characterListReducer,
    toggles: toggleReducer,
    form: formReducer
})

export default rootReducer