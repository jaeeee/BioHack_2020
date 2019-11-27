import React, { Component } from "react";
import '../App.css';
import Virus from "../images/virus.png";
import CheeringVirus from "../images/cheeringvirus.png"

export class About extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 p-5 content-section">
          <div className="row">
              <div className="col-md">
                  <h1 className="display-5"><strong>About BioHack</strong></h1>
                  <p>
                    BioHack is a 12-hour health and medicine-themed hackathon hosted at University of California, Riverside.
                    As a beginner-friendly and multidisciplinary hackathon, BioHack aims to give students the opportunity to create innovatived
                    personalized solutions and save lives with their projects.
                    <br></br><br></br>
                    During BioHack, students will get the opportunity to form teams
                    and collaborate, attend workshops to learn about new technologies, and network with industry partners.
                  </p>
              </div>
              <div className="col-6">
                  <img src={Virus} className="virus"/>
              </div>
          </div>
        </div>
        <hr></hr>
        <div className="container mt-5 p-5 content-section">
          <div className="row">
              <div className="col-6">
                  <img src={CheeringVirus} className="cheeringVirus"/>
              </div>
              <div className="col-md">
                  <h1 className="display-5"><strong>Announcements</strong></h1>
                  <p>
                      Want to help plan/organize BioHack 2020? Come out to the first BioHack 2020
                      Committee Info Meeting on Wednesday, November 20th, 2019 from 5-6 p.m.
                      in Bourns A265! We'd love to have you on board!
                  </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
