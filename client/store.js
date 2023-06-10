import { configureStore } from 'redux';
import reducers from './reducers/combinedReducers'

const store = configureStore(
    reducers
)

export default store