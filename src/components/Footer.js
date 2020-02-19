import React, { Component } from "react";
import {FaEnvelope, FaFacebook, FaInstagram, FaSlack} from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div className="contact row mb-3">
                <a href="mailto:biohack.ucr@gmail.com"><FaEnvelope /></a>
                <a href="https://www.facebook.com/UCRBioHack/"><FaFacebook/></a>
                <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagram/></a>
            </div>
          <p>Built with love by UCR's BioHack Web Development Team.</p>
        </div>
    );
  }
}

export default Footer;
