import { combineReducers } from 'redux'
import fittedReducer from './appReducers'

// our combined redux reducers

const reducers = combineReducers({
    app: fittedReducer
})

export default reducers