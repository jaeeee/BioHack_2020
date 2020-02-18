import React, { Component } from 'react';

class Sponsor extends Component {
    render() {
        return (
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.logo} className = "sponsors_logo"/>
                </a>
        );
    }
}

export default Sponsor;
