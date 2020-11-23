import { TOGGLE_TEMPERATURE } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case TOGGLE_TEMPERATURE:
            return {
                toggle: action.payload
            }
        default:
            return state;
    }
}