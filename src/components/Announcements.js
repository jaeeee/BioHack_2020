import React, { Component } from 'react';
import CheeringVirus from "../images/Icon_Red.JPG";
import {MdAnnouncement} from "react-icons/md";
class Announcements extends Component {
    render() {
        return (
            <div className="row section fadeIn" style={{marginTop:150, marginBottom:150}}id = "Announcements">
                <div className="col-lg-6">
                  <img src={CheeringVirus} className="cheeringVirus"/>
                </div>
                <div className="col-lg-6">
                  <h1><MdAnnouncement/> Announcements</h1>
                  <p className="mt-5">
                    Want to help plan/organize BioHack 2020? Come out to the first BioHack 2020
                    Committee Info Meeting on Wednesday, November 20th, 2019 from 5-6 p.m.
                    in Bourns A265! We'd love to have you on board!
                  </p>
                </div>
            </div>
        );
    }
}

export default Announcements;
