import React from 'react'
// import WeatherForm from './WeatherForm';
import OpenWeather from './OpenWeather';

const Weather = () => {
    return (
        <div>
            <div className="App-image">
                <OpenWeather />
                {/* <WeatherForm /> */}
            </div>
        </div>
    )
}

export default Weather;
