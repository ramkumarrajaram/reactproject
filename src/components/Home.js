import React, {Component} from 'react'
import TestItHeader from "./TestItHeader";
import {Link} from "react-router-dom";
import '../styles/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <TestItHeader/>
                <div className="App-image">
                    <div className="home-text ">
                        <h1 className="header-text">Order your souvenirs of Phuket!</h1>
                        <Link to="/gallery" className="Button home-margin-right">Order now!</Link>
                        <Link to="/weather" className="Button">Get London's Weather!</Link>
                    </div>
                </div>
            </div>
        )
    }

}
