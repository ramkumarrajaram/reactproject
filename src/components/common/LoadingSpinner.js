import React from 'react'
import '../../styles/Common.css'

const LoadingSpinner = () => {
    return (
        <div className="ui form weatherForm">
            <div className="lds-ring centre-content">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingSpinner;