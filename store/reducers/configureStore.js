import { createStore, combineReducers } from 'redux';
import estimatedValueReducer from './estimatedValueReducer'

const rootReducer = combineReducers ({
    estimatedValueReducer,
})

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;