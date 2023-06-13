import { createStore } from 'redux';
import reducers from './reducers/combinedReducers'

// our Redux store

const store = createStore(
    reducers
)

export default store