import React, { Component } from 'react';
import CheeringVirus from "../images/Icon_Red.PNG";
import {MdAnnouncement} from "react-icons/md";
class Announcements extends Component {
    render() {
        return (
            <div className="mt-5 section fadeIn" id="Announcements">
            <h1 className="text-center"><MdAnnouncement/> Announcements</h1>
            <div className="row">
                <div className="col">
                  <img src={CheeringVirus} className="virus" alt="Cheering Virus"/>
                </div>
                <div className="col">
                  <p className="mt-5">
                  Priority registration opens on <strong>Monday, February 24th</strong>! Follow us on social media to be notified as soon as applications drop!
                  Want to <strong>help plan/organize BioHack 2020</strong>? Come to our planning committee meetings!
                  <br /><br />
                  <strong>Operations: Tuesdays 10-11 a.m. in Bourns A171</strong>
                  <br />
                  <strong>Marketing: Wednesdays 4-5 p.m. in WCH 203</strong>
                  < br /><br />
                  Feel free to email <strong>biohack.ucr@gmail.com</strong> or contact Tammi Tang/John Shin on social media for further questions/inquiries!
                  </p>
                </div>
                </div>
            </div>
        );
    }
}

export default Announcements;
