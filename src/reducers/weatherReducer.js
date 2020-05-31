import { GET_WEATHER, RESET_FORM_SUBMIT, SET_LOADING, SHOW_ERROR } from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    isFormSubmitted: false,
    details: null,
    errorMessage: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return { ...state, isFormSubmitted: true, isLoading: false, details: action.payload };
        case RESET_FORM_SUBMIT:
            return { ...state, isFormSubmitted: false, errorMessage: null };
        case SET_LOADING:
            return { ...state, isLoading: true }
        case SHOW_ERROR:
            return { ...state, isFormSubmitted: true, isLoading: false, errorMessage: action.payload };
        default:
            return state;
    }
}