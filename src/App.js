import React, { Component } from 'react'
import './App.css';
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Announcements from './components/Announcements';
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import {FaHome, FaDna, FaQuestion, FaUserFriends} from 'react-icons/fa'
import {MdAnnouncement} from "react-icons/md";
import {GiPodium} from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Image from "./images/Website-Backdrop.png";

export class App extends Component {
  render() {
    // console.log(this.props.location.pathname);
    return (
      <div>
        <HashRouter>
          <div className="main-wrapper">
            <nav className="sticky-top navbar navbar-expand-lg navigation-bar navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="dropdown"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">

                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink class="nav-link" to="/">
                      <span className="nav-bar-option">
                        <FaHome /> Home
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      <span className="nav-bar-option">
                        <FaDna /> BioHack
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/announcements">
                      <span className="nav-bar-option">
                        <MdAnnouncement /> Announcements
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/projects">
                      <span className="nav-bar-option">
                        <GiPodium /> Winners
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/FAQs">
                      <span className="nav-bar-option">
                        <FaQuestion /> FAQs
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sponsors">
                      <span className="nav-bar-option">
                        <FaUserFriends /> Sponsors
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>


            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/announcements" component={Announcements} />
              <Route path="/projects" component={Projects} />
              <Route path="/FAQs" component={FAQ} />
              <Route path="/sponsors" component={Sponsors} />
            </div>

            <Footer />
          </div>
        </HashRouter>
        </div>
    );
    }
  }
  export default App;
