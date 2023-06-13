import * as types from '../actions/actionTypes'

// we only have one action so our reducer is relatively simple
// the only prop in our state is the urlList, that when updated by our options copmonent will make a response in our generated component

const initialState = {
    urlList: []
}

const fittedReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GENERATE: {
            let urlList = state.urlList.slice()
            urlList.push(action.payload)
            return {
                ...state,
                urlList
            }
        }
        default: {
            return state
        }
    }
}

export default fittedReducer;