import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import logger from '../middlewares/logger'
import api from '../middlewares/api'

const enhancer = applyMiddleware( thunk, api, logger );
const store = createStore( reducer, enhancer );

//dev only. No need in prod
window.store = store;

export default store;
