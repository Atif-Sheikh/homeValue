import { ESTIMATED_VALUE ,SET_EMAIL,SET_USER_AUTH } from '../constants'

export function setEstimatedValue(value){
    return{
        type:ESTIMATED_VALUE,
        payload: value
    }
}
export function setEmail(value){
    return{
        type:SET_EMAIL,
        payload: value
    }
}
export function setAuth(tok){
    return{
        type:SET_USER_AUTH,
        payload: tok
    }
}