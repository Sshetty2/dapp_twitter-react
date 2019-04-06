import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware]
const enhancers = [];
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(
    rootReducer,
    initialState, 
    composeEnhancers(
    applyMiddleware(...middleware), ...enhancers
    // other store enhancers if any
  ));