import React, { Component } from 'react'
import './App.css';
import Contact from "./components/Contact";
import Home from "./components/HomePage";
import Announcements from './components/Announcements';
import Projects from "./components/Projects";
import FQA from "./components/FAQ";
import About from "./components/About";
import {FaHome, FaDna, FaQuestion} from 'react-icons/fa'
import {MdAnnouncement} from "react-icons/md";
import {GiPodiumWinner} from "react-icons/gi";
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
                    <NavLink className="nav-link" to="/projects"><span className="nav-bar-option"><GiPodiumWinner/> Winners</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/fqas"><span className="nav-bar-option"><FaQuestion/> FAQs</span></NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/announcements" component={Announcements}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/fqas" component={FQA}/>
            </div>
            {/* Contact Section */}
            {/* Add Sponsors component here? */}
            <Contact />
        </div>
      </HashRouter>
      );
    }
  }

  export default App;
