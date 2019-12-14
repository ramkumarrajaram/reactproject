import React, {Component} from 'react'
import '../../styles/TestOrder.css'
import '../../styles/Common.css'
import LoadingSpinner from "../common/LoadingSpinner"
import CommonError from "../common/CommonError"

export default class GoogleWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            cityName: this.props.cityName,
            temperature: '',
            weatherData: '',
            errorMessage: '',
            isErrorOccurred: false
        };
    }
 
    componentDidMount() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName + '&APPID=74ef58eaa282576b0c32521f7dd57179'
        fetch(proxyUrl + targetUrl)
            .then(result => {
                if(result.ok) {
                    return result.json();
                }
                throw Error("invalid city");
            })
            .then(data => {
                const zeroCelciusToKelvin = 273.15;
                const temperature = data.main.temp;
                let temperatureInCelcius = (temperature - zeroCelciusToKelvin).toFixed();
                this.setState({isLoaded: true});
                this.setState({cityName: data.name});
                this.setState({temperature: temperatureInCelcius});
                this.setState({weatherData: (data.weather[0].description).toUpperCase()});
            })
            .catch(error => {
                this.setState({isLoaded: true});
                this.setState({isErrorOccurred: true});
                this.setState({errorMessage: error.message});
            })
    }

    render() {
        const isLoaded = this.state.isLoaded;
        const isErrorOccurred = this.state.isErrorOccurred;

        if (!isLoaded) {
            return <LoadingSpinner/>;
        } else if(isErrorOccurred ===true) {
            return <CommonError errorMessage = {this.state.errorMessage} backToSearch={this.props.backToSearch}/>
        } else {
            return (
                <div className="TestForm">
                    <h2 className="TestCenter">Weather Information</h2>
                    <div className="Summary-list">
                        <label><b>City Name: </b></label><br/>
                        <label>{this.state.cityName}</label>
                        <label>{this.state.isErrorOccurred}</label>
                    </div>
                    <div className="Summary-list">
                        <label><b>Temperature: </b></label><br/>
                        <label>{this.state.temperature} &deg;<strong>C</strong></label>
                    </div>
                    <div className="Summary-list">
                        <label><b>Weather Detail: </b></label><br/>
                        <label>{this.state.weatherData}</label>
                    </div>
                    <div className="TestCenter">
                        <input className="Button" type="submit" value="Back To Search" onClick={this.props.backToSearch}/>
                    </div>
                </div>
            )
        }
    }
}
