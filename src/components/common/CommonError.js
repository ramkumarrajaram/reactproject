import React from 'react'
import '../../styles/TestOrder.css'

const CommonError = (props) => {
    return (
        <div className="ui form weatherForm">
            <h2 className="TestCenter">Oops!! That's an error</h2>
            <div className="Summary-list">
                <label><b>Error message: </b></label><br />
                <label>{props.errorMessage.toUpperCase()}</label>
            </div>
            <span></span>
            <div className="ui left">
                <button className="ui right floated button primary" onClick={props.backToSearch}>
                    Back To Search
                        </button>
            </div>
        </div>
    );
}

export default CommonError;