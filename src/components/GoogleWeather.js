import React, {Component} from 'react'
import '../styles/TestOrder.css'
import '../styles/Common.css'

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

    componentDidMount() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
        fetch(proxyUrl + targetUrl)
            .then(result => {
                return result.json();
            }).then(data => {
            this.setState({isLoading: true});
            this.setState({cityName: data.name});
            this.setState({temperature: data.main.temp});
            this.setState({weatherData: (data.weather[0].description).toUpperCase()});
        })
    }

    render() {

        const isLoaded = this.state.isLoading;

        if (!isLoaded) {
            return (
                <div className="TestForm">
                    <p>
                        <strong>Please wait!!! Loading data!!</strong>
                    </p>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
        } else {

            return (
                <div className="TestForm">
                    <h2 className="TestCenter">Weather Information</h2>
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

}
