import promise from 'redux-promise'
import reducers from '../store/reducers'
import { applyMiddleware, createStore } from 'redux'

//CONFIG DEVTOOLS REDUX
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store =  applyMiddleware(promise)(createStore)(reducers, devTools)

export default store