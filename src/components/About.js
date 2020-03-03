import React, { Component } from "react";
import Virus from "../images/Icon_Surprised.PNG";
import {FaDna} from 'react-icons/fa'

export class About extends Component {
  render() {
    return (
      <div className="section">
      <h1><FaDna/> What is BioHack All About?</h1>
        <div className="content fadeIn" id = "BioHack">
              <p>
                BioHack is a 12-hour <strong>health and medicine-themed hackathon</strong> hosted at University of California, Riverside.
                <br />
                As a beginner-friendly and multidisciplinary hackathon, BioHack aims to give students the <strong>opportunity</strong> to
                 create innovative personalized solutions and <strong>save lives with their projects</strong>.
                 <br />
                During BioHack, students will get the opportunity to form teams
                and collaborate, <strong>attend workshops</strong> to learn about new technologies, and <strong>network</strong> with industry partners.
              </p>
              <img src={Virus} className="virus" alt="Virus"/>
              </div>
        </div>
      );
  }
}

export default About;
