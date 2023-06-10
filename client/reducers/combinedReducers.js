import { combineReducers } from 'redux'
import appReducer from './appReducers'


const reducers = combineReducers({
    app: appReducer
})

export default reducers