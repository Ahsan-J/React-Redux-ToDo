import {createStore,applyMiddleware} from 'redux';
import reduce from './reducers/index.js';
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

export default  createStore(reduce,middleware);