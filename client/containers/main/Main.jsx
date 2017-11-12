import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import logo from './logo.svg';
// import './App.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import GoogleMap from '../../components/map';

import Sidebar from 'react-sidebar';

import * as pointsActions from '../../actions/PointsActions';

class Main extends Component {
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
        console.log(this.props);
        const sidebarContent = (<h1>here be sidebar</h1>);

        return (
            <div className="App">
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSidebarOpen}>
                    <Header
                        user={this.props.user}
                    />
                    <div className="body">
                        <GoogleMap
                            points={this.props.points}
                            addPoint={this.props.pointsActions.addPoint}
                        />
                    </div>
                    <Footer/>

                </Sidebar>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        points: state.points,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pointsActions: bindActionCreators(pointsActions, dispatch),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
