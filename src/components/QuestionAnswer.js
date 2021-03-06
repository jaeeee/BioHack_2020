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
        const divStyle = {
              marginRight: '0.8rem'
//   border: '5px solid pink'
};
        return (
          <div
            className={"faq" + (this.state.open ? " open" : "")}
            onClick={() => this.ToggleCard()}
          >
            <div className="faq-question" style={divStyle}>


              <div className="faq-arrow-container">
                <FaArrowCircleDown className="faq-arrow" />
              </div>

                {this.props.question}


            </div>
            <div className="faq-answer">{this.props.answer}</div>
          </div>
        );
    }
}

export default QuestionAnswer;
