import authReducer from './authReducer';
import holdReducer from './holdReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    authReducer,
    holdReducer
})

export default createStore(rootReducer, devToolsEnhancer())