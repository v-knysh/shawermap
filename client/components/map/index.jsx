import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;



export default class GoogleMap extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };

    render() {
        return(
            <div>here be map</div>
        )
    }

    // render() {
    //     return (
    //         <GoogleMapReact
    //             defaultCenter={this.props.center}
    //             defaultZoom={this.props.zoom}
    //         >
    //           <AnyReactComponent
    //               lat={59.955413}
    //               lng={30.337844}
    //               text={'Kreyser Avrora'}
    //           />
    //         </GoogleMapReact>
    //     );
    // }
}