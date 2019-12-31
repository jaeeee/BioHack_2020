import React, { Component } from "react";
import Contact from "./Contact";

export class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <Contact/>
          <p>Built with love by UCR's BioHack Web Development Team.</p>
        </div>
    );
  }
}

export default Footer;
