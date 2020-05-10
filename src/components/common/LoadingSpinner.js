import React from 'react'
import '../../styles/Common.css'

const LoadingSpinner = () => {
    return (
        <div className="TestForm">
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