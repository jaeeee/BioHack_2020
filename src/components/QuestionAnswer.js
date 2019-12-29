import React, { Component } from 'react';

class QuestionAnswer extends Component {
    state = {
        text : this.props.question,
        fontSize: 30
    }

    ToggleCard = () => {
        if (this.state.text === this.props.question) {
            this.setState({
                text : this.props.answer,
                fontSize : 17
            });
        }
        else {
            this.setState({
                text : this.props.question,
                fontSize : 30
            });
        }
    }
    render() {
        return (
            <div>
                <button className="FQA-card" onClick={this.ToggleCard} style={{fontSize: this.state.fontSize}}>
                    {this.state.text}
                </button>
            </div>
        );
    }
}

export default QuestionAnswer;