import React, { Component } from 'react';

class WinnerCard extends Component {
    render() {
        return (
            <div className="biohack-winners">
                <h4>
                    {this.props.icon}{" "}
                    {this.props.title}
                </h4>
                    <img src={this.props.image}/>
                    <p>
                        {this.props.description}
                    </p>
            </div>
        );
    }
}

export default WinnerCard;