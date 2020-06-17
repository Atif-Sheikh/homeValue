import { SET_EMAIL } from '../constants'

const initialState = {
    email : ''
    };

const setEmailReducer = ( state = initialState , action) => {
    switch(action.type){
        case SET_EMAIL :
            return{
                email : action.payload
            };
        default:
            return state;
    }
}
export default setEmailReducer;