import React from 'react'
import OrderSummary from "./OrderSummary";
import '../../styles/TestOrder.css'

class TestItOrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            phoneNumber: '',
            country: 'SG',
            email: '',
            address: '',
            copiesArray: this.props.copiesArray,

            isNavigated: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        let inputs = Array.from(document.getElementsByTagName('input'))
        let emptyInputs = inputs.filter(x => x.value.trim() === '')
        if (emptyInputs.length > 0) {
            alert("All fields are mandatory. No fields can be empty.")
            this.setState({
                isNavigated: false
            })
        } else {
            this.setState({
                isNavigated: true
            })
        }
    }

    buildFieldsWithIndex() {
        const copiesArray = this.state.copiesArray
        let divList = [];
        for (let index = 1; index <= 5; index++) {
            const nameOfElement = "numberOfCopiesForItem" + index;
            divList.push(
                <label>
                    <div className="TestLabel">Number of copies for #{index}:</div>
                    <div className="TestText">
                        <input className="TestText" type="number" name={nameOfElement}
                               value={copiesArray[index] || 0} disabled="disabled"/>
                    </div>
                </label>
            )
        }

        return divList;
    }

    render() {
        console.log("this.state.copiesArray" + this.state.copiesArray);

        return <form id="test_form">
            {
                this.state.isNavigated === false &&
                <div className="TestForm">
                    <h2 className="TestCenter">
                        Your Order:
                    </h2>
                    <label>
                        <div className="TestLabel">Last name:</div>
                        <div className="TestText">
                            <input className="TestText" type="text" name="lastName" value={this.state.lastName}
                                onChange={this.handleChange}/>
                        </div>
                    </label>
                    <label>
                        <div className="TestLabel">First name:</div>
                        <div className="TestText">
                            <input className="TestText" type="text" name="firstName" value={this.state.firstName}
                                onChange={this.handleChange}/>
                        </div>
                    </label>
                    <label>
                        <div className="TestLabel">Phone number:</div>
                        <div className="TestText">
                            <input className="TestText" type="text" name="phoneNumber" value={this.state.phoneNumber}
                                onChange={this.handleChange}/>
                        </div>
                    </label>
                    <label>
                        <div className="TestLabel">Country:</div>
                        <div className="TestText">
                            <select className="TestText" name="country" value={this.state.country} onChange={this.handleChange}>
                                <option value="SG">SG</option>
                                <option value="HK">HK</option>
                            </select>
                        </div>
                    </label>
                    <label>
                        <div className="TestLabel">Email:</div>
                        <div className="TestText">
                            <input className="TestText" type="text" name="email" value={this.state.email}
                                onChange={this.handleChange}/>
                        </div>
                    </label>
                    <label>
                        <div className="TestLabel">Address:</div>
                        <div className="TestText">
                            <input className="TestText" type="text" name="address" value={this.state.address}
                                onChange={this.handleChange}/>
                        </div>
                    </label>
                
                    {this.buildFieldsWithIndex()}

                    <div className="TestCenter">
                        <input className="Button" type="submit" value="Add to cart" onClick={this.handleSubmit}/>
                    </div>

                </div>
            }
            {
                this.state.isNavigated === true &&
                <OrderSummary state={this.state}/>
            }
        </form>;
    }
}

export default TestItOrderForm;
