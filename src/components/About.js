import React, { Component } from "react";
import Virus from "../images/Icon_Surprised.PNG";
import {FaDna} from 'react-icons/fa'

export class About extends Component {
  render() {
    return (
        <div className="row section fadeIn" id = "BioHack">
          <div className="col">
            <h1><FaDna/> What is BioHack All About?</h1>
            <p className="mt-5">
              BioHack is a 12-hour <span className="highlight">health and medicine-themed hackathon</span> hosted at University of California, Riverside.
              As a beginner-friendly and multidisciplinary hackathon, BioHack aims to give students the <span className="highlight">opportunity</span> to
               create innovatived personalized solutions and <span className="highlight">save lives with their projects</span>.
              </p>
              <p>
              During BioHack, students will get the opportunity to form teams
              and collaborate, <span className="highlight">attend workshops</span> to learn about new technologies, and <span className="highlight">network</span> with industry partners.
            </p>
          </div>
          <div className="col">
            <img src={Virus} className="virus" alt="Virus"/>
          </div>
        </div>
      );
  }
}

export default About;
