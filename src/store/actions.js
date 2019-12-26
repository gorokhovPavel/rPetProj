import {
    START,
    SUCCESS,
    ERROR,
    LOAD_ALL_CITIES,
    SET_MIN_DEGREE
} from '../store/constants'

export const loadAllCities = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOAD_ALL_CITIES + START });
        const rawRes = await fetch("/api/cities");
        const response = await rawRes.json();
        dispatch({ type: LOAD_ALL_CITIES + SUCCESS, response });
    } catch (error) {
        dispatch({ type: LOAD_ALL_CITIES + ERROR, error });
    }
};

export const setFilterDegree = filter => ({
    type : SET_MIN_DEGREE,
    payload : { filter }
  });