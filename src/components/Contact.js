import React, { Component } from 'react';
import GreenVirus from "../images/Icon_Green.JPG";
import {FaDna, FaQuestion, FaBrain, FaAllergies, FaCar, FaSun, FaCloud, FaCheck, FaEnvelope, FaFacebook, FaInstagram, FaSlack} from 'react-icons/fa'

class Contact extends Component {
    render() {
        return (
            <div className="section contact fadeIn">
            <div className="row">
            <div className="col">
            <h1>Reach Out to Us!</h1>
              <a href="mailto:biohack.ucr@gmail.com"><FaEnvelope /></a>
              <h5>Email</h5>
              <a href="https://www.facebook.com/UCRBioHack/"><FaFacebook/></a>
              <h5>Facebook</h5>
              <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagram/></a>
              <h5>Instagram</h5>
              <a href="https://biohack2019.slack.com/"><FaSlack /></a>
              <h5>Slack</h5>
            </div>
            <div className="col">
            <img src={GreenVirus} className="virus"/>
            </div>
            </div>
            </div>
        );
    }
}

export default Contact;
