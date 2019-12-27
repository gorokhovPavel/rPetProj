import { createSelector } from 'reselect'

const filtersSelector = state => state.filters
const citiesSelector = state => state.cities.entities

export const citiesLoading = state =>
  state.cities.loading || state.cities.loading

export const allCitiesSelector = createSelector(citiesSelector, cities =>
  cities.valueSeq().toArray()
)

export const filtratedCitiesSelector = createSelector(
  citiesSelector,
  filtersSelector,
  (cities, filters) =>
    cities
      .valueSeq()
      .toArray()
      .filter(item =>
        filters.cityFilter.length === 0
          ? item.degree >= filters.degreeFilter
          : filters.cityFilter.indexOf(item.id) !== -1
      )
)
