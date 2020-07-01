import { combineReducers } from 'redux'
import characterListReducer from '../components/CharacterList/reducer'
import toggleReducer from '../components/Toggle/reducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    list: characterListReducer,
    toggles: toggleReducer,
    form: formReducer
})

export default rootReducer