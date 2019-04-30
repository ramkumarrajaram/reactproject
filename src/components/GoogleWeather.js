import React, {Component} from 'react'
import '../styles/TestOrder.css'

export default class GoogleWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            cityName: '',
            temperature: '',
            weatherData: ''
        };
    }

    componentWillMount() {
        fetch('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
            .then(result => {
                return result.json();
            }).then(data => {
            this.setState({cityName: data});
            this.setState({temperature: data.name});
            this.setState({weatherData: data.name});
        })
    }

    render() {

        return (
            <div className="TestForm">
                <h2 className="TestCenter">Summary of your order</h2>
                <div className="Summary-list">
                    <label><b>City Name: </b></label><br/>
                    <label>{this.state.cityName}</label>
                </div>
                <div className="Summary-list">
                    <label><b>Temperature: </b></label><br/>
                    <label>{this.state.temperature}</label>
                </div>
                <div className="Summary-list">
                    <label><b>Weather Detail: </b></label><br/>
                    <label>{this.state.weatherData}</label>
                </div>
            </div>
        )
    }

}