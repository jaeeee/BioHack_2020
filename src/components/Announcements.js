import React, { Component } from 'react';
import CheeringVirus from "../images/Icon_Red.PNG";
import {MdAnnouncement} from "react-icons/md";
class Announcements extends Component {
    render() {
        return (
            <div className="mt-5 section fadeIn" id="Announcements">
            <h1 className="text-center"><MdAnnouncement/> Announcements</h1>
            <div className="row">
                <div className="col-md-6">
                  <img src={CheeringVirus} className="virus" alt="Cheering Virus"/>
                </div>
                <div className="col-md-6">

                  <p className="mt-5">
                    Want to <span className="highlight">help</span> plan/organize BioHack 2020? Come out to the first BioHack 2020 <span className="highlight">Committee Info Meeting</span> on Wednesday, November 20th, 2019 from 5-6 p.m.
                    in Bourns A265! We'd love to have you on board!
                  </p>
                </div>
                </div>
            </div>
        );
    }
}

export default Announcements;
