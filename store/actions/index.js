import { ESTIMATED_VALUE } from '../constants'

export function setEstimatedValue(value){
    return{
        type:ESTIMATED_VALUE,
        payload: value
    }
}