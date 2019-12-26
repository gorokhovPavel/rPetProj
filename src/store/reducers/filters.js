import { Record } from 'immutable'
import { SET_MIN_DEGREE } from '../constants'

const ReducerState = Record({
    degreeFilter : 10
});

export default (filters = new ReducerState(), { type, payload }) => {
    switch (type) {
        case SET_MIN_DEGREE:
            return filters.set( 'degreeFilter', payload.filter );
        default :
            return filters;
    }
};
