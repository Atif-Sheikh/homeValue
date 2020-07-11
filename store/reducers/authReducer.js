import { SET_USER_AUTH } from '../constants'

const initialState = {
    userAuth : ''
    };

const authReducer = ( state = initialState , action) => {
    switch(action.type){
        case SET_USER_AUTH :
            return{
                userAuth : action.payload
            };
        default:
            return state;
    }
}
export default authReducer;