import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import weatherReducer from './weatherReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    weatherData: weatherReducer
});