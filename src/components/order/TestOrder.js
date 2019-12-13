import React from 'react';

import TestItHeader from "../common/TestItHeader";
import TestItOrderForm from "./TestItOrderForm";

export default class TestOrder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfCopiesForFirstItem: 0
        }
    }

    componentDidMount() {
        alert(this.props.location)
        this.setState({numberOfCopiesForFirstItem: this.props.location})
    }

    render() {
        return (

            <div>
                <TestItHeader/>
                <div className="App-image">
                    <TestItOrderForm numberOfCopiesForFirstItem={this.state.numberOfCopiesForFirstItem}/>
                </div>
            </div>
        );
    }
}
