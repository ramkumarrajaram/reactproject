import React from 'react';
import logo from '../../assets/images/dummy.jpg';
import '../../styles/TestItHeader.css'
import GoogleOAuth from '../oauth/GoogleOAuth';
import { Link } from 'react-router-dom';

const TestItHeader = () => {
    return (
        <div className="ui secondary menu">
            <Link to="/" className="item">
                <img src={logo} alt="" />
            </Link>
            <div className="right menu">
                <div className="item">
                    Online Ordering System
                </div>
                <GoogleOAuth/>
            </div>
        </div>
    );
}

export default TestItHeader;