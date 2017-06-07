import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import postalCode from './postalCode';

const rootReducer = combineReducers({
    postalCode,
    routing: routerReducer
});

export default rootReducer;