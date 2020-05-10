import React from 'react';
import logo from '../../assets/images/dummy.jpg';
import '../../styles/TestItHeader.css'

const TestItHeader = () => {
    return (
        <table className="Test-brand-title">
            <tbody>
                <td className="TestBrand">
                    <a className="navbar-brand" href="/">
                        <img src={logo} height="50" alt="" />
                    </a>
                </td>
                <td>
                    <h2>Online Ordering System</h2>
                </td>
            </tbody>
        </table>
    );
}

export default TestItHeader;