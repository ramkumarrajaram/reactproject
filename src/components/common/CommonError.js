import React from 'react'
import '../../styles/TestOrder.css'

const CommonError = () => {
    return (
        <div className="TestForm">
            <h2 className="TestCenter">An error occured!</h2>
            <div className="Summary-list">
                <label><b>Error message: </b></label><br />
                <label>{this.props.errorMessage.toUpperCase()}</label>
            </div>
            <span></span>
            <div className="TestCenter">
                <input className="Button" type="submit" value="Back To Search" onClick={this.props.backToSearch} />
            </div>
        </div>
    );
}

export default CommonError;