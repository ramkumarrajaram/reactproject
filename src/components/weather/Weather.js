import React from 'react'
import TestItHeader from "../common/TestItHeader";
import WeatherForm from './WeatherForm';

const Weather = () => {
    return (
        <div>
            <TestItHeader />
            <div className="App-image">
                <WeatherForm />
            </div>
        </div>
    )
}

export default Weather;
