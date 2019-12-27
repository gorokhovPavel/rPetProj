import {
  START,
  SUCCESS,
  ERROR,
  LOAD_ALL_CITIES,
  SET_MIN_DEGREE,
  SET_CITY_FILTER,
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

export const setFilterCities = (filterCity, isDelete) => (
  dispatch,
  getState
) => {
  const { filters, cities } = getState()
  const { cityFilter, degreeFilter } = filters
  const idCityFilter = filterCity.id

  const cityArr = cities.entities.valueSeq().toArray()
  const cityArrFilteredId = cityArr
    .filter(item => item.degree >= degreeFilter)
    .map(item => item.id)

  let finallyCityIdList = cityFilter.length > 0 ? cityFilter : cityArrFilteredId
  const index = finallyCityIdList.indexOf(idCityFilter)

  if (isDelete) {
    finallyCityIdList = finallyCityIdList.filter(item => item !== idCityFilter)
  } else {
    if (index === -1) {
      finallyCityIdList = [...finallyCityIdList, idCityFilter]
    }
  }

  dispatch({ type: SET_CITY_FILTER, payload: finallyCityIdList })
}

export const setFilterDegree = filterDegree => dispatch => {
  dispatch({ type: SET_CITY_FILTER, payload: [] })
  dispatch({ type: SET_MIN_DEGREE, payload: filterDegree })
}
