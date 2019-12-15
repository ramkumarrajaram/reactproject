import React, {Component} from 'react'
import TestItHeader from "../common/TestItHeader";
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
