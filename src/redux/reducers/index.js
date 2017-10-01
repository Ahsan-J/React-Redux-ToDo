import {combineReducers} from 'redux';
import listReducer from './listReducer.js';
import userReducer from './userReducer.js';

export default combineReducers({listReducer,userReducer});