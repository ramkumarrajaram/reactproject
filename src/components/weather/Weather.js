import React, {Component} from 'react'
import TestItHeader from "../common/TestItHeader";
import GoogleWeather from "./GoogleWeather";

export default class Weather extends Component {
    render() {
        return (
            <div>
                <TestItHeader/>
                <div className="App-image">
                    <GoogleWeather/>
                </div>
            </div>
        )
    }
}
