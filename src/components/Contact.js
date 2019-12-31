import React, { Component } from 'react';

import {FaEnvelope, FaFacebook, FaInstagram, FaSlack} from 'react-icons/fa'

class Contact extends Component {
    render() {
        return (
            <div className="contact row mb-3">
                <a href="mailto:biohack.ucr@gmail.com"><FaEnvelope /></a>
                <a href="https://www.facebook.com/UCRBioHack/"><FaFacebook/></a>
                <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagram/></a>
                <a href="https://biohack2019.slack.com/"><FaSlack /></a>
              </div>
        );
    }
}

export default Contact;
