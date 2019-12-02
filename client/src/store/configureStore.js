import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import contactReducer from '../reducers/contactReducer'
import singleContactReducer from '../reducers/singleContactReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        contacts:contactReducer,
        singleContact:singleContactReducer

    }),applyMiddleware(thunk))
    return store
}


export default configureStore