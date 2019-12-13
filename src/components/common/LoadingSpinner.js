import React, {Component} from 'react'
import '../../styles/Common.css'

export default class LoadingSpinner extends Component {
    render() {
        return (
            <div className="TestForm">
                <div className="lds-ring centre-content">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}