import { ADD_TODO } from '../constants/actionTypes';

const defaultState = ['Learning HTML', 'Learning CSS', 'Learning JavaScript'];

export default function(state = defaultState, action): typeof defaultState {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}
