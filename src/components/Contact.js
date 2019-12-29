import React, { Component } from "react";
import {FaEnvelope, FaFacebook, FaInstagram, FaSlack} from 'react-icons/fa'

export class Contact extends Component {
  render() {
    return (
        <div className="contact">
            <div className="row text-center" >
              <div className="col-sm-3"> 
                <a href="mailto:biohack.ucr@gmail.com"><FaEnvelope /></a>
                <h5>Contact</h5> 
              </div>
              <div className="col-sm-3"> 
                <a href="https://www.facebook.com/UCRBioHack/"><FaFacebook/></a>
                <h5>Facebook</h5>
              </div>
              <div className="col-sm-3"> 
                <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagram/></a>
                <h5>Instagram</h5>
              </div>
              <div className="col-sm-3"> 
                <a href="https://biohack2019.slack.com/"><FaSlack /></a>
                <h5>Slack</h5>
              </div>
            </div>
          </div>
    );
  }
}

export default Contact;
