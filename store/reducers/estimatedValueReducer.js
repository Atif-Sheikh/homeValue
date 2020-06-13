import { ESTIMATED_VALUE } from '../constants'

const initialState = {
    estimatedValue : {}
    };

const estimatedValueReducer = ( state = initialState , action) => {
    switch(action.type){
        case ESTIMATED_VALUE :
            return{
                estimatedValue : action.payload
            };
        default:
            return state;
    }
}
export default estimatedValueReducer;