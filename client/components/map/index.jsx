import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

import './index.styl'

export default class GoogleMap extends Component {
    static defaultProps = {
        center: {lat: 50.4327137, lng: 30.5282171},
        zoom: 11,
    };

    render() {
        return (
            <div className="GoogleMap">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}