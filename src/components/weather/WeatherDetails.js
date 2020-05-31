import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../../styles/TestOrder.css'
import '../../styles/Common.css'

class WeatherDetails extends Component {
    renderForm = () => {
        const weatherInfo = this.props.weatherInfo;
        const temperature = getTemperature(weatherInfo);

        return (
            <div className="ui form weatherForm">
                <h2 className="TestCenter">Weather Information</h2>
                <div className="Summary-list">
                    <label><b>City Name: </b></label><br />
                    <label>{weatherInfo.name}</label>
                    <label>{weatherInfo.isErrorOccurred}</label>
                </div>
                <div className="Summary-list">
                    <label><b>Temperature: </b></label><br />
                    <label>{temperature} &deg;<strong>C</strong></label>
                </div>
                <div className="Summary-list">
                    <label><b>Weather Detail: </b></label><br />
                    <label>{weatherInfo.weather[0].description.toUpperCase()}</label>
                </div>
                <div className="ui left">
                    <button className="ui right floated button primary" onClick={this.props.backToSearch}>
                        Back To Search
                        </button>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>{this.renderForm()}</div>
        );
    }
}

const getTemperature = (data) => {
    const zeroCelciusToKelvin = 273.15;
    const temperature = data.main.temp;
    return (temperature - zeroCelciusToKelvin).toFixed();
}

const mapStateToProps = (state) => {
    return { weatherInfo: state.weatherData.details }
}

export default connect(
    mapStateToProps
)(WeatherDetails);