import { GET_WEATHER, RESET_FORM_SUBMIT } from '../actions/types';

const INITIAL_STATE = {
    isFormSubmitted: false,
    details: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return { ...state, isFormSubmitted: true, details: action.payload};
        case RESET_FORM_SUBMIT:
            return { ...state, isFormSubmitted: false };
        default:
            return state;
    }
}