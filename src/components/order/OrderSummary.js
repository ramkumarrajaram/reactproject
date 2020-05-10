import React from 'react'
import TestItOrderForm from "./TestItOrderForm";
import '../../styles/TestOrder.css'

const OrderSummary = (props) => {
    return (
        <div className="TestForm">
            <h2 className="TestCenter">Summary of your order</h2>
            <div className="Summary-list">
                <label><b>Last Name</b></label><br/>
                <label>{props.state.lastName}</label>
            </div>
            <div className="Summary-list">
                <label><b>First Name</b></label><br/>
                <label>{props.state.firstName}</label>
            </div>
            <div className="Summary-list">
                <label><b>Phone</b></label><br/>
                <label>{props.state.phoneNumber}</label>
            </div>
            <div className="Summary-list">
                <label><b>Country</b></label><br/>
                <label>{props.state.country}</label>
            </div>
            <div className="Summary-list">
                <label><b>Email</b></label><br/>
                <label>{props.state.email}</label>
            </div>
            <div className="Summary-list">
                <label><b>Address</b></label><br/>
                <label>{props.state.address}</label>
            </div>

            {buildFieldsWithIndex(props)}

            <div className="TestCenter">
                <input className="Button" type="submit" value="Back To Order" onClick={backToOrder} />
            </div>
        </div>
    );
}

const buildFieldsWithIndex = (props) => {

    const copiesArray = props.state.copiesArray
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

const backToOrder = () => {
    return <TestItOrderForm />
}

export default OrderSummary;