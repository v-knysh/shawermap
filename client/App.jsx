import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import GoogleMap from './components/map';

import Sidebar from 'react-sidebar';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }



    render() {

        const sidebarContent = (<h1>here be sidebar</h1>);

        return (
            <div className="App">
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen}>
                    <Header/>
                    <div className="body">
                        <GoogleMap/>
                    </div>
                    <Footer/>

                </Sidebar>

            </div>
        );
    }
}

export default App;
