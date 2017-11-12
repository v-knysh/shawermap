import React, { Component } from 'react';
import Map from 'google-map-react';

import './index.styl'
import Marker from '../marker';


export default class GoogleMap extends Component {
    static defaultProps = {
        center: {lat: 50.4327137, lng: 30.5282171},
        zoom: 11,
    };

    render() {
        console.log('maps props', this.props);
        const points = this.props.points.points.map((item)=>{
            return (
                <Marker
                    lat={item.lat}
                    lng={item.lng}
                    name={item.name}
                    key={item.name}
                />
            )
        });

        return (
            <div className="Leaflet_map">
                <button onClick={()=>{this.props.addPoint(50,30,'test')}}>add</button>
                <Map
                    center={this.props.center}
                    zoom={this.props.zoom}
                >
                    {points}
                </Map>
            </div>
        );
    }
}