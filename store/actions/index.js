import { ESTIMATED_VALUE ,SET_EMAIL } from '../constants'

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