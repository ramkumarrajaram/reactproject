import weatherapi from '../apis/weatherapi'
import { SIGN_IN, SIGN_OUT, GET_WEATHER, RESET_FORM_SUBMIT } from './types';

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
    const response = await weatherapi.get('/weather', {
        params: {
            q: formValues.cityName,
            APPID: '74ef58eaa282576b0c32521f7dd57179'
        }
    });

    dispatch({
        type: GET_WEATHER,
        payload: response.data
    });
}

export const resetFormSubmit = () => {
    return {
        type: RESET_FORM_SUBMIT
    }
}
