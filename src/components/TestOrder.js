import React from 'react';

import TestItHeader from "../components/TestItHeader";
import TestItOrderForm from "../components/TestItOrderForm";

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
