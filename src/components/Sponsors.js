import React, { Component } from "react";
import Sponsor from "./Sponsor";
import {FaUserFriends} from 'react-icons/fa';
import GreenVirus1 from '../images/Icon_Green1.png';
import GreenVirus2 from '../images/Icon_Green2.png';
import amgenLogo from '../images/sponsorsLogos/amgen_logo.png';
import blackstoneLaunchpadUcrLogo from '../images/sponsorsLogos/blackstone_launchpad.png';
import bmesLogo from '../images/sponsorsLogos/bmes_logo.png';
import cseLogo from '../images/sponsorsLogos/cse_logo.jpg';
import digitalOceanLogo from '../images/sponsorsLogos/digital_ocean_logo.png';
import googleLogo from '../images/sponsorsLogos/google_logo.png';
import kgiLogo from '../images/sponsorsLogos/kgi_logo.png';
import wolframAlphaLogo from '../images/sponsorsLogos/wolfram_alpha_logo.png';
import xyzLogo from '../images/sponsorsLogos/xyz_logo.png';
import yerbaMateLogo from '../images/sponsorsLogos/yerba_mate_logo.png';
// import  from '../images/sponsorsLogos';

const sponsorsLeft = [
  { logo: googleLogo , link: "https://www.google.com/" },
  { logo: amgenLogo, link: "https://www.amgen.com/"},
  { logo: cseLogo, link: "https://www1.cs.ucr.edu/"},
  { logo: "oop", link: "https://www.ootpdevelopments.com/"},
  { logo: kgiLogo, link: "https://www.kgi.edu/"},
  { logo: bmesLogo, link: "https://bmesucr.weebly.com/"}
]

const sponsorsRight = [
  { logo: blackstoneLaunchpadUcrLogo, link: "https://techpartnerships.ucr.edu/launchpad-ucr"},
  { logo: wolframAlphaLogo, link: "https://www.wolframalpha.com/"},
  { logo: xyzLogo, link: "https://nic.xyz/"},
  { logo: digitalOceanLogo, link: "https://www.digitalocean.com/products/droplets/?_campaign=DO_Dev_Awareness_G_Search_B_Generic_Alpha&_adgroup=digitalocean&_keyword=digitalocean&_device=c&_copytype=&_adposition=&_medium=brand_sem&_source=google&_dkitrig=&_2dkitrig=&gclid=CjwKCAiAx_DwBRAfEiwA3vwZYu739GJuAgP07NYQoZ4a54h2ARW_8tzFlhkBixgCiqAPYnQEUd3owBoCAtwQAvD_BwE"},
  { logo: yerbaMateLogo, link: "https://guayaki.com/yerba-mate/"}
]

export class Sponsors extends Component {
  render() {
    return (
      <div className="mt-5 section fadeIn" id="Sponsors">
        <center>
          <h1>
            <FaUserFriends/> Sponsors
          </h1>
        </center>
        <div className="row mt-5">
          <div className="col">
            {sponsorsLeft.map((sponsor, index) => (
              <Sponsor
                logo = {sponsor.logo}
                link = {sponsor.link}
                key = {index}
              />
            )) 
            }
          </div>
          <div className="col">
            <img
              src={GreenVirus1}
              className="happy-virus"
              alt="Happy Virus"
            ></img>
            <img
              src={GreenVirus2}
              className="happy-virus"
              alt="Happy Virus"
            ></img>
          </div>
          <div className="col">
          {sponsorsRight.map((sponsor, index) => (
              <Sponsor
                logo = {sponsor.logo}
                link = {sponsor.link}
                key = {index}
              />
            )) 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
