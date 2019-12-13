import React, {Component} from 'react'
import '../../styles/TestOrder.css'
import GoogleWeather from './GoogleWeather';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            isSubmitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.backToSearch = this.backToSearch.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        var inputs = Array.from(document.getElementsByTagName('input'))
        var emptyInputs = inputs.filter(x => x.value.trim() === '')
        if (emptyInputs.length > 0) {
            alert("All fields are mandatory. No fields can be empty.")
        } else {
            this.setState({
                isSubmitted: true
            })
        }
    }

    backToSearch() {
        this.setState({
            isSubmitted: false
        })
    }

    render() {
        const isSubmitted = this.state.isSubmitted;

        if(isSubmitted) {
            return <GoogleWeather cityName={this.state.cityName} backToSearch={this.backToSearch}/>
        } else {
            return (
                <div class="TestForm">
                        <h2 className="TestCenter">
                            Weather in your city
                        </h2>
                        <label>
                            <div className="TestLabel">Enter city name</div>
                            <div className="TestText">
                                <input className="TestText" type="text" name="cityName" placeholder="City Name"
                                    onChange={this.handleChange}/>
                            </div>
                        </label>
                        <div className="TestCenter">
                            <input className="Button" type="submit" value="Search" onClick={this.handleSubmit}/>
                        </div>                  
                </div>
            )
        }
    }
}