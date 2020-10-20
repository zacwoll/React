import { TOGGLE_TEMPERATURE } from '../actions/types';

const initialState = {
    toggle: 'F'
};

export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_TEMPERATURE:
            return {
                ...state,
                toggle: action.payload
            }
        default:
            return state;
    }
}