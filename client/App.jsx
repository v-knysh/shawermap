import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import GoogleMap from './components/map';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="body">
                    <GoogleMap/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
