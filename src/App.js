import React, { Component } from 'react'
import './App.css';
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Announcements from './components/Announcements';
import Projects from "./components/Projects";
import FQA from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import {FaHome, FaDna, FaQuestion} from 'react-icons/fa'
import {MdAnnouncement} from "react-icons/md";
import {GiPodium} from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main-wrapper">
            <nav className="sticky-top navbar navbar-expand-lg navigation-bar navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink class="nav-link" to="/"><span className="nav-bar-option"><FaHome/> Home</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about"><span className="nav-bar-option"><FaDna/> BioHack</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/announcements"><span className="nav-bar-option"><MdAnnouncement/> Announcements</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/projects"><span className="nav-bar-option"><GiPodium/> Winners</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/fqas"><span className="nav-bar-option"><FaQuestion/> FAQs</span></NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <hr></hr>
            <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/announcements" component={Announcements}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/fqas" component={FQA}/>
              <Route path="/contact" component={Contact}/>
            </div>
            {/* Contact Section */}
            {/* Add Sponsors component here? */}
            <Footer />
        </div>
      </HashRouter>
      );
    }
  }

  export default App;
