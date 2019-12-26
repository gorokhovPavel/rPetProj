import { Record } from 'immutable'
import {
  SET_MIN_DEGREE,
  ADD_CITY_FILTER,
  REMOVE_CITY_FILTER,
} from '../constants'

const ReducerState = Record({
  degreeFilter: 10,
  cityFilter: [],
})

export default (filters = new ReducerState(), { type, payload }) => {
  switch (type) {
    case SET_MIN_DEGREE:
      return filters.set('degreeFilter', payload.filterDegree)
    case ADD_CITY_FILTER:
      return filters.set('cityFilter', [...filters.cityFilter, payload])
    case REMOVE_CITY_FILTER:
      return filters.set(
        'cityFilter',
        filters.cityFilter.filter(item => item !== payload)
      )
    default:
      return filters
  }
}
