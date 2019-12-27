import { Record } from 'immutable'
import { SET_MIN_DEGREE, SET_CITY_FILTER } from '../constants'

const ReducerState = Record({
  degreeFilter: 3,
  cityFilter: [],
})

export default (filters = new ReducerState(), { type, payload }) => {
  switch (type) {
    case SET_MIN_DEGREE:
      return filters.set('degreeFilter', payload)
    case SET_CITY_FILTER:
      return filters.set('cityFilter', payload)
    default:
      return filters
  }
}
