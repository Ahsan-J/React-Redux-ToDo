import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './components/App';
import store from './redux/store.js'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

store.subscribe(()=>{
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
