import { createStore, combineReducers } from 'redux';
import estimatedValueReducer from './estimatedValueReducer'
import setEmailReducer from './setEmailReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers ({
    estimatedValueReducer,
    setEmailReducer,
    authReducer,
})

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;