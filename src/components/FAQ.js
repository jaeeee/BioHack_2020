import React, { Component } from 'react'
import BlueVirus from '../images/Icon_Blue.PNG';
import {FaQuestion} from 'react-icons/fa'

import QuestionAnswer from './QuestionAnswer';


const questionAnswer = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a weekend-long event that invites curious minds to learn and build something new. You may pick up a project of your choosing to work on during the event to dive into a topic you've been meaning to explore. You also get to meet new friends as you work in a team of up to 4!"
    },
    {
      question: "Who can attend?",
      answer: "If you are an undergraduate UCR student who is curious about hacking then of course! If you do not have any programming experience, CS mentors will be around to help. If you are interested in mentoring during this event, you can fill out a mentor application!"
    },
    {
      question: "Do I need to be a CS major or minor?",
      answer: "No! BioHack encourages students who are curious about coding and health to create their coding project."
    },
    {
      question: "How do I register?",
      answer: "Applications to participate in BioHack 2020 open in one week! Feel free to contact us at BioHack.UCR@gmail.com if you have any further questions."
    },
    {
      question: "Does this event cost money?",
      answer: "Nope! This event is free to all students. We will provide food, snacks, a place to hack, swag, and prizes for the winners!"
    },
    {
      question: "Will there be hardware available?",
      answer: "Yes! Hardware will be provided."
    },
    {
      question: "What should I bring?",
      answer: "Bring a valid student ID for admission, a laptop with a charger, and anything else you need to hack away!"
    },
    {
      question: "Where do I sleep?",
      answer: "Since this event is a 12-hour event, sleeping over will not be necessary and will not be provided."
    }
]

export class FAQ extends Component {
    render() {
        return (
            <div className="faqs section mt-5 mb-5 fadeIn" id="FAQ">
              <h1 className="mb-5"><FaQuestion/> FAQs</h1>
              <div className="row">
                <div className="col-md-6">
                  {
                    questionAnswer.map((qa, index) => (
                      <QuestionAnswer
                      question={qa.question}
                      answer={qa.answer}
                      key={index}
                      />
                    ))
                  }
                </div>
                <div className="col-md-6">
                  <img src={BlueVirus} className="virus mt-5" alt="Thinking Virus"></img>
                </div>
              </div>
            </div>
              /* <div className="col-lg-6">
                  <img src={BlueVirus} className="virus mt-5 ml-5" alt="Thinking Virus"></img>
                  <img src={GreenVirus} className="virus mt-5 ml-5" alt="Thinking Virus"></img>
              </div> */
        );
    }
}

export default FAQ;
