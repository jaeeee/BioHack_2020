import React, { Component } from 'react';
import {FaArrowCircleDown} from 'react-icons/fa';

class QuestionAnswer extends Component {
    state = {
        open : false
    }

    ToggleCard = () => {
        this.setState({
            open : !this.state.open
        })
    }
    render() {
        return (
            <div 
                className={"faq" + (this.state.open ? " open" : "") }
                onClick={() => this.ToggleCard()}
            >
                <div className="faq-question">
                     {this.props.question} 
                    <FaArrowCircleDown className="faq-arrow"/>
                </div>
                <div className="faq-answer">
                     {this.props.answer}
                </div>
            </div>
        );
    }
}

export default QuestionAnswer;