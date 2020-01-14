import React, { Component } from 'react';

class Sponsor extends Component {
    render() {
        return (
            <div>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.logo} className="sponsor-logo" alt="sponsor_logo"/>
                </a>
            </div>
        );
    }
}

export default Sponsor;