import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/homepage/Home";
import TestOrder from "./components/order/TestOrder";
import Gallery from "./components/gallery/Gallery";
import Weather from "./components/weather/Weather";
import TestItHeader from './components/common/TestItHeader';

const App = () => {
    return (
        <BrowserRouter>
            <TestItHeader />
            <Route exact={true} path='/' render={() => (<Home />)} />
            <Route exact={true} path='/order' render={() => (<TestOrder />)} />
            <Route exact={true} path='/gallery' render={() => (<Gallery />)} />
            <Route exact={true} path='/weather' render={() => (<Weather />)} />
        </BrowserRouter>
    );
}

export default App;
