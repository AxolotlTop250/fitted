import { combineReducers } from 'redux'
import fittedReducer from './appReducers'


const reducers = combineReducers({
    app: fittedReducer
})

export default reducers