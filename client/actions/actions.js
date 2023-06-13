import * as types from './actionTypes'


export const generate = url =>({
    type: types.GENERATE,
    payload:url,
})