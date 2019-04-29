import React, {Component} from 'react'
import TestItHeader from "./TestItHeader";
import TestSelectPhoto from "./TestSelectPhoto";

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <TestItHeader/>
                <div className="App-image">
                    <TestSelectPhoto/>
                </div>
            </div>
        )
    }
}