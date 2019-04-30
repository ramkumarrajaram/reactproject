import React, {Component} from 'react';
import logo from '../../assets/images/dummy.jpg';
import '../../styles/TestItHeader.css'

class TestItHeader extends Component {
    render() {
        return (
            <table className="Test-brand-title">
                <tbody>
                    <td className="TestBrand">
                        <a className="navbar-brand" href="/">
                            <img src={logo} height="50" alt=""/>
                        </a>
                    </td>
                    <td>
                        <h2>Online Ordering System</h2>
                    </td>
                </tbody>
            </table>
        );
    }
}

export default TestItHeader;