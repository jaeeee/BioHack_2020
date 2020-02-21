import React, { Component } from 'react';
import CheeringVirus from "../images/Icon_Red.PNG";
import {MdAnnouncement} from "react-icons/md";
class Announcements extends Component {
    render() {
        return (
          <div className="section fadeIn">
          <h1><MdAnnouncement/> Announcements</h1>
            <div className="content" id="Announcements">
                  <img src={CheeringVirus} className="virus" alt="Cheering Virus"/>
                  <p>
                  <ul className="announcement-list">
                  <li>Priority registration opens on <strong>Monday, February 24th</strong>! Follow us on social media to be notified as soon as applications drop!</li>
                  <li>Want to <strong>help plan/organize BioHack 2020</strong>? Come to our planning committee meetings!</li>
                  <br />
                  <strong>Operations: Tuesdays 10-11 a.m. in Bourns A171</strong>
                  <br />
                  <strong>Marketing: Wednesdays 4-5 p.m. in WCH 203</strong>
                  < br />
                  <br />
                  <li>Feel free to email <strong>biohack.ucr@gmail.com</strong> or contact Tammi Tang/John Shin on social media for further questions/inquiries!</li>
                  </ul>
                  </p>
                </div>
            </div>
        );
    }
}

export default Announcements;
