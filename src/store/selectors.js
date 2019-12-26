import { createSelector } from 'reselect'

export const citiesLoading = state => state.cities.loading || state.cities.loading;

const filtersSelector = state => state.filters;
const citiesSelector = state => state.cities.entities;

export const filtratedCitiesSelector = createSelector( citiesSelector, filtersSelector, ( cities, filters ) =>
    cities
        .valueSeq()
        .toArray()
        .filter( item => item.degree >= filters.degreeFilter )
);

// export const avarageRateSelector = ( state, {city} ) =>
//     city.degree
//         .map( review => review && review.rating )
//         .filter( rate => typeof rate !== 'undefined')
//         .reduce( (acc, el, _, arr) => acc + el / arr.length, 0 );