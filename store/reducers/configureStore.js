import { createStore, combineReducers } from 'redux';
import estimatedValueReducer from './estimatedValueReducer'
import setEmailReducer from './setEmailReducer'

const rootReducer = combineReducers ({
    estimatedValueReducer,
    setEmailReducer,
})

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;