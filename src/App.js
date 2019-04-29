import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import TestOrder from "./components/TestOrder";
import Gallery from "./components/Gallery";
import Weather from "./components/Weather";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact={true} path='/' render = {() => (<Home/>)}/>
                <Route exact={true} path='/order' render = {() => (<TestOrder/>)}/>
                <Route exact={true} path='/gallery' render = {() => (<Gallery/>)}/>
                <Route exact={true} path='/weather' render = {() => (<Weather/>)}/>
            </BrowserRouter>
        );
    }
}

export default App;
