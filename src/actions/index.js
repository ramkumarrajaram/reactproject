import weatherapi from '../apis/weatherapi'
import {
    SIGN_IN,
    SIGN_OUT,
    GET_WEATHER,
    RESET_FORM_SUBMIT,
    SET_LOADING,
    SHOW_ERROR
} from './types';

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        payload: user
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const getWeather = (formValues) => async dispatch => {
    try {
        const response = await weatherapi.get('/weather',
            {
                params: {
                    q: formValues.cityName,
                    APPID: '74ef58eaa282576b0c32521f7dd57179'
                }
            });

        dispatch({
            type: GET_WEATHER,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: SHOW_ERROR,
            payload: error.message
        });
    }
}

export const resetFormSubmit = () => {
    return {
        type: RESET_FORM_SUBMIT
    }
}

export const setLoadingSpinner = () => {
    return {
        type: SET_LOADING
    }
}
