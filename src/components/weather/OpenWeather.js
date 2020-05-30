import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/TestOrder.css';
import { getWeather, resetFormSubmit } from '../../actions'
import { validate } from '../../validate/WeatherFormValidate';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';

class OpenWeather extends React.Component {
    renderError = ({ error, touched }) => {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, className, type, placeholder, meta }) => {
        const classNameForDiv = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={classNameForDiv}>
                <input {...input}
                    autoComplete="off"
                    className={className}
                    placeholder={placeholder}
                    type={type} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formProps) => {
        this.props.getWeather(formProps);
    }

    backToSearch = () => {
        return this.props.resetFormSubmit();
    }

    renderWeatherData = () => {
        if (this.props.isFormSubmitted) {
            return <WeatherDetails backToSearch={this.backToSearch} />
        }
        return this.renderForm();
    }

    renderForm = () => {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error weatherForm'>
                <h2 className="TestCenter">
                    Weather in your city
                </h2>
                <div className="TestLabel">Enter city name</div>
                <Field className="field"
                    component={this.renderInput}
                    name="cityName"
                    type="text"
                    placeholder="City Name"
                />
                <div className="ui left">
                    <button className="ui right floated button primary">
                        Search
                    </button>
                </div>
            </form>
        );
    }

    render() {
        console.log("render called");
        return (
            <div>{this.renderWeatherData()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isFormSubmitted: state.weatherData.isFormSubmitted }
}

const reduxFormWrapped = reduxForm({
    form: 'weatherForm',
    validate
})(OpenWeather);

export default connect(mapStateToProps,
    { getWeather, resetFormSubmit })(reduxFormWrapped);