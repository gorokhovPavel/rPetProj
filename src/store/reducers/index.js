import { combineReducers } from 'redux'
import cities from '../reducers/cities'
import filters from '../reducers/filters'

export default combineReducers({
    cities, filters
});