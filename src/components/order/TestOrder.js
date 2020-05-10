import React from 'react';

import TestItOrderForm from "./TestItOrderForm";
import { withRouter } from 'react-router';

 class TestOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            copiesArray: []
        }

        if(this.props.location.state !== null && this.props.location.state !== undefined) {
            this.state = {
                copiesArray: this.props.location.state.copiesArray
            }
        }
    }

    render() {
        return (

            <div>
                <div className="App-image">
                    <TestItOrderForm copiesArray={this.state.copiesArray}/>
                </div>
            </div>
        );
    }
}

export default withRouter(TestOrder);
