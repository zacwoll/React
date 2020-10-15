import { CITY_UPDATED } from '../actions/types';

const initialState = {
    city: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case CITY_UPDATED:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
} 