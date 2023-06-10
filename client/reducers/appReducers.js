import * as types from '../actions/actionTypes'

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
    }
}