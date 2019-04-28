import React from 'react'
import TestItOrderForm from "./TestItOrderForm";
import '../styles/TestOrder.css'

export default class OrderSummary extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="TestForm">
            <h2 className="TestCenter">Summary of your order</h2>
            <div className="Summary-list">
                <label  ><b>Last Name</b></label><br/>
                <label>{this.props.state.lastName}</label>
            </div>
            <div className="Summary-list">
                <label><b>First Name</b></label><br/>
                <label>{this.props.state.firstName}</label>
            </div>
            <div className="Summary-list">
                <label><b>Phone</b></label><br/>
                <label>{this.props.state.phoneNumber}</label>
            </div>
            <div className="Summary-list">
                <label><b>Country</b></label><br/>
                <label>{this.props.state.country}</label>
            </div>
            <div className="Summary-list">
                <label><b>Email</b></label><br/>
                <label>{this.props.state.email}</label>
            </div>
            <div className="Summary-list">
                <label><b>Address</b></label><br/>
                <label>{this.props.state.address}</label>
            </div>
            <div className="Summary-list">
                <label><b>Number of copies for #1</b></label><br/>
                <label>{this.props.state.numberOfCopiesForFirstItem}</label>
            </div>
            <div className="Summary-list">
                <label><b>Number of copies for #2</b></label><br/>
                <label>{this.props.state.numberOfCopiesForSecondItem}</label>
            </div>
            <div className="Summary-list">
                <label><b>Number of copies for #3</b></label><br/>
                <label>{this.props.state.numberOfCopiesForThirdItem}</label>
            </div>
            <div className="Summary-list">
                <label><b>Number of copies for #4</b></label><br/>
                <label>{this.props.state.numberOfCopiesForFourthItem}</label>
            </div>
            <div className="Summary-list">
                <label><b>Number of copies for #5</b></label><br/>
                <label>{this.props.state.numberOfCopiesForFifthItem}</label>
            </div>
        </div>
    }

    backToOrder() {
        return <TestItOrderForm/>
    }
}