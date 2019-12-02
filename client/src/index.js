import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {StartSetContacts} from './actions/contacts'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App';

const store=configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(StartSetContacts())

const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

