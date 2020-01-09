import React, { Component } from "react";
import {FaUserFriends} from 'react-icons/fa';
import GreenVirus from '../images/Icon_Green.PNG';

export class Sponsors extends Component {
  render() {
    return (
      <div className="mt-5 section fadeIn" id="Sponsors">
        <center>
          <h1>
            <FaUserFriends /> Sponsors
          </h1>
        </center>
        <div className="row mt-5">
          <div className="col">
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
          </div>
          <div className="col">
            <img
              src={GreenVirus}
              className="virus mt-5 ml-5"
              alt="Thinking Virus"
            ></img>
          </div>
          <div className="col">
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
            <h2>Sponsor PlaceHolder</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
