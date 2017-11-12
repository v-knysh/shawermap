import React from 'react';

import './index.styl'

export default class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <button className="Hamburger_button">
                    <img src="static/images/hamburger.svg" alt=""/>
                </button>
                <div className="Header_logo">
                    {/*<img src="static/images/shawarmap.png" alt=""/>*/}
                    <h1>Shawermap</h1>
                    <h2>{this.props.user.name}</h2>
                </div>
            </div>
        )
    }
}