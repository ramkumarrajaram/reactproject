import React from 'react';

import TestItHeader from "../common/TestItHeader";
import TestItOrderForm from "./TestItOrderForm";

export default class TestOrder extends React.Component {
    render() {
        return (

            <div>
                <TestItHeader/>
                <div className="App-image">
                    <TestItOrderForm/>
                </div>
            </div>
        );
    }
}
