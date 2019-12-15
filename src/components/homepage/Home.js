import React, {Component} from 'react'
import TestItHeader from "../common/TestItHeader";
import {Link} from "react-router-dom";
import '../../styles/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <TestItHeader/>
                <div className="App-image">
                    <div className="home-text ">
                        <h1 className="header-text">Welcome to Online Ordering System!</h1>
                        <Link to="/gallery" className="Button home-margin-right">Order now!</Link>
                        <Link to="/weather" className="Button">Weather Report</Link>
                    </div>
                </div>
            </div>
        )
    }
}
