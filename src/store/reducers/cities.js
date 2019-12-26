import { Record } from 'immutable'
import { arrToMap } from '../../utils/index'
import {
    START,
    SUCCESS,
    ERROR,
    LOAD_ALL_CITIES
} from '../constants'

const сitiesRecord = Record({
    id : null,
    name : null,
    typeWeather : null,
    nameWeather : null,
    wind : null,
    degree : null,
    pressure : null,
});

const ReducerRecord = Record({
    entities : arrToMap( [], сitiesRecord ),
    loading : false,
    error : null
});

export default ( state = new ReducerRecord(), { type, payload, id, response, error } ) => {
    switch (type) {
        case LOAD_ALL_CITIES + START:
            return state.set('loading', true);
        case LOAD_ALL_CITIES + ERROR:
            return state.set('loading', false).set('error', error);
        case LOAD_ALL_CITIES + SUCCESS:
            return state
              .set('loading', false)
              .set('entities', arrToMap(response, сitiesRecord ));
        default:
            return state;
    }
};