import React, {Component} from 'react'
import TestItHeader from "../common/TestItHeader";
//import GoogleWeather from "./GoogleWeather";
import WeatherForm from './WeatherForm';

export default class Weather extends Component {
    render() {
        return (
            <div>
                <TestItHeader/>
                <div className="App-image">
                    <WeatherForm />
                </div>
            </div>
        )
    }
}
