import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../styles/TestOrder.css';
import { getWeather, resetFormSubmit, setLoadingSpinner } from '../../actions'
import { validate } from '../../validate/WeatherFormValidate';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';
import LoadingSpinner from '../common/LoadingSpinner';
import CommonError from '../common/CommonError';

class OpenWeather extends React.Component {
    renderValidationError = ({ error, touched }) => {
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
                {this.renderValidationError(meta)}
            </div>
        );
    }

    onSubmit = (formProps) => {
        this.props.setLoadingSpinner();
        this.props.getWeather(formProps);

    }

    backToSearch = () => {
        return this.props.resetFormSubmit();
    }

    renderWeatherData = () => {
        //if ()
        console.log(this.props);
        if (this.props.isLoading) {
            return <LoadingSpinner />;
        } else if (!this.props.isFormSubmitted) {
            return this.renderForm();
        } else if (this.props.errorMessage !== null) {
            return <CommonError
                errorMessage={this.props.errorMessage}
                backToSearch={this.backToSearch} />
        }
        return <WeatherDetails backToSearch={this.backToSearch} />
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
        return (
            <div>{this.renderWeatherData()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFormSubmitted: state.weatherData.isFormSubmitted,
        isLoading: state.weatherData.isLoading,
        errorMessage: state.weatherData.errorMessage
    }
}

const reduxFormWrapped = reduxForm({
    form: 'weatherForm',
    validate
})(OpenWeather);

export default connect(mapStateToProps, {
    getWeather,
    resetFormSubmit,
    setLoadingSpinner
})(reduxFormWrapped);