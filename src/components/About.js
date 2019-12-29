import React, { Component } from "react";
import Virus from "../images/virus.png";
import {FaDna} from 'react-icons/fa'

export class About extends Component {
  render() {
    return (
        <div className="row section" id = "BioHack">
          <div className="col-lg-6">
            <h1 style={{color:"#05386b"}}><FaDna/> What is BioHack All About?</h1>
            <p className="mt-5">
              BioHack is a 12-hour health and medicine-themed hackathon hosted at University of California, Riverside.
              As a beginner-friendly and multidisciplinary hackathon, BioHack aims to give students the opportunity to create innovatived
              personalized solutions and save lives with their projects.
              </p>
              <p>
              During BioHack, students will get the opportunity to form teams
              and collaborate, attend workshops to learn about new technologies, and network with industry partners.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={Virus} className="virus"/>
          </div>
        </div>
      );
  }
}

export default About;
