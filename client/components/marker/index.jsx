import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

// import {greatPlaceStyle} from './my_great_place_styles.js';

export default class Marker extends Component {
    static propTypes = {
        text: PropTypes.string,
        lat: PropTypes.number,
        lng: PropTypes.number,
    };

    static defaultProps = {
        lat: 0,
        lng: 0,
    };

    // shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            // {/*<div style={greatPlaceStyle}>*/}
        <div>
            {this.props.name} : @{this.props.lat},{this.props.lng}
        </div>
    );
    }
}