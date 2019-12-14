import React from 'react'
import TestItOrderForm from "./TestItOrderForm";
import '../../styles/TestOrder.css'

export default class OrderSummary extends React.Component{

    buildFieldsWithIndex() {

        const copiesArray = this.props.state.copiesArray
        let divList = [];

        for (let index = 1; index <= 5; index++) {
            divList.push(
                <div className="Summary-list">
                    <label><b>Number of copies for #{index}</b></label><br/>
                    <label>{copiesArray[index] || 0}</label>
                </div>
            )
        }

        return divList;
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
            
            {this.buildFieldsWithIndex()}
        </div>
    }

    backToOrder() {
        return <TestItOrderForm/>
    }
}