import React, {Component} from 'react'
import '../../styles/Common.css'

export default class LoadingSpinner extends Component {
    render() {
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
    }
}