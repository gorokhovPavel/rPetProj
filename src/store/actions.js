import {
  START,
  SUCCESS,
  ERROR,
  LOAD_ALL_CITIES,
  SET_MIN_DEGREE,
  ADD_CITY_FILTER,
} from '../store/constants'

export const loadAllCities = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_CITIES + START })
    const rawRes = await fetch('/api/cities')
    const response = await rawRes.json()
    dispatch({ type: LOAD_ALL_CITIES + SUCCESS, response })
  } catch (error) {
    dispatch({ type: LOAD_ALL_CITIES + ERROR, error })
  }
}

export const setFilterCities = filterCity => (dispatch, getState) => {
  const { filters } = getState()
  const { cityFilter } = filters
  const idCityFilter = filterCity.id
  if (cityFilter.indexOf(idCityFilter) === -1) {
    dispatch({ type: ADD_CITY_FILTER, payload: idCityFilter })
  }
}

export const setFilterDegree = filterDegree => ({
  type: SET_MIN_DEGREE,
  payload: { filterDegree },
})
