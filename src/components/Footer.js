import React, { Component } from "react";
import CheeringVirus from "../images/Icon_Red.PNG";
import Virus from "../images/Icon_Surprised.PNG";
import {FaEnvelope, FaFacebook, FaInstagram} from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div className="contact">
          <img src={CheeringVirus} className="footer-virus" alt="Cheering Virus"/>
                <a href="mailto:biohack.ucr@gmail.com"><FaEnvelope /></a>
                <a href="https://www.facebook.com/UCRBioHack/"><FaFacebook/></a>
                <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagram/></a>
                <img src={Virus} className="footer-virus" alt="Virus"/>
            </div>
          <p>Built with love by UCR's BioHack Web Development Team.</p>
        </div>
    );
  }
}

export default Footer;
