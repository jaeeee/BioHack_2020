import React, { Component } from 'react'
//import {Grid, Cell} from 'react-mdl'
import './landingpage.css';
import ThinkingVirus from '../images/thinkingvirus.png';
import { Accordion, Card, Button } from 'react-bootstrap';
import Virus from "../images/virus.png";
import CheeringVirus from "../images/cheeringvirus.png"
import best_beginner_biohack_2019 from "../images/best_beginner_biohack_2019.jpg"
import best_google_biohack_2019 from "../images/best_google_biohack_2019.jpg"
import best_hardware_biohack_2019 from "../images/best_hardware_biohack_2019.jpg"
import best_humanitarian_biohack_2019 from "../images/best_humanitarian_biohack_2019.jpg"
import overall_first_biohack_2019 from "../images/overall_first_biohack_2019.jpg"

import {FaDna, FaQuestion, FaBrain, FaAllergies, FaCar, FaSun, FaCloud, FaCheck, FaEnvelope, FaFacebook, FaInstagram, FaSlack} from 'react-icons/fa'
import {MdAnnouncement} from "react-icons/md";
import {GiPodiumWinner} from "react-icons/gi";
// The above is a best way to import reac-icons. The library was added to the package.json file

export class Landing extends Component {
    render() {
        return (
          <div className="main-wrapper">

            {/* New Navigation Bar */}
            <nav className="sticky-top navbar navbar-expand-lg navigation-bar navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#BioHack"><span className="nav-bar-option">BioHack <FaDna/></span> </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#Announcements"><span className="nav-bar-option">Announcements <MdAnnouncement/></span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#Winners2019"><span className="nav-bar-option">Winners <GiPodiumWinner/></span></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#FAQs"><span className="nav-bar-option">FAQs <FaQuestion/></span></a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* End of new Navigation Bar */}

            {/*Start Hero-section*/}
            <div className="hero">
              <h1>WELCOME TO <span style={{color:"#e2eb98"}}>BIOHACK</span>.</h1>
              <h3>16 MAY 2020</h3>
            </div>
            {/*End Hero-section*/}

            {/*Start container for ALL content*/}
            <div className="container BioHack" id = "BioHack">

            {/*Start About-section*/}
              <div className="row section">
                <div className="col-lg-6">
                  <h1>What BioHack is All About</h1>
                  <p>
                    BioHack is a 12-hour health and medicine-themed hackathon hosted at University of California, Riverside.
                    As a beginner-friendly and multidisciplinary hackathon, BioHack aims to give students the opportunity to create innovatived
                    personalized solutions and save lives with their projects.
                    </p>
                    <p>
                    During BioHack, students will get the opportunity to form teams
                    and collaborate, attend workshops to learn about new technologies, and network with industry partners.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img src={Virus} className="virus"/>
                </div>
              </div>
              {/*End About-section*/}

              {/*Start Announcements-section*/}
              <div className="row section" id = "Announcements">
                <div className="col-lg-6">
                  <img src={CheeringVirus} className="cheeringVirus"/>
                </div>
                <div className="col-lg-6">
                  <h1>Announcements</h1>
                  <p>
                    Want to help plan/organize BioHack 2020? Come out to the first BioHack 2020
                    Committee Info Meeting on Wednesday, November 20th, 2019 from 5-6 p.m.
                    in Bourns A265! We'd love to have you on board!
                  </p>
                </div>
              </div>
              {/*End Announcements-section*/}

              {/* Start Biohack-winner-section*/}
              <div className="mt-5 section" id = "Winners2019">
                <h1 className="text-center">BioHack 2019 Winners</h1>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                        <h4 className="text-center"><FaBrain className="icons"/> Overall 1st Place:<br></br> Remembrall</h4>
                        <img src={overall_first_biohack_2019}></img>
                        <p>
                            Remembrall is a companion app that was created for those suffering from Alzheimer's and Dementia.
                            Rememberall helps users remember important details of their life by using real time user entered data.
                            The user can input their thoughts, memories, pictures and important information about themselves to aid throughout their daily lives.
                        </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                        <h4 class="text-center"><FaAllergies className="icons"/> Best Google Hack:<br></br>Skancare</h4>
                        <img src={best_google_biohack_2019}></img>
                        <p>
                          Skancare aims to bring awareness to skin ailments by utilizing machine learning to classify skin lesions.
                          This program takes a close-up image of the skin and analyzes it to identify the lesion type.
                          Skancare aims to make lesion diagnoses easier to identify.
                        </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                        <h4 className="text-center"><FaSun className="icons"/> Best Beginner's Hack:<br></br>Sleep-Stone Bridge</h4>
                        <img src={best_beginner_biohack_2019}></img>
                        <p>
                          Sleep-Stone Bridge is a device that monitors the amount of excess light the user is exposed to.
                          Excess light can cause a person’s regular 24-hour Circadian Rhythm to be disrupted and lead health risks such as lack of sleep.
                          This project alerts the user with light sensors during evening hours to lower light levels to preserve the Circadian Rhythm.
                        </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                        <h4 className="text-center"> Best Startup Hack:<br></br>Drowsy Drivers</h4>
                        <FaCar style={{fontSize: "110px", color:"#e2eb98", marginTop:"32px", marginBottom:"32px" }}/>
                        <p>
                          The Drowsy Driver’s program detects user awareness by examining images taken of the driver's face.
                          Using MATLAB, the program isolates the driver’s eyes and determines whether the user's eyes are open or closed.
                          The user will then receive notification that their eyes are closed and will be adjust their driving accordingly.
                        </p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners ">
                      <h4 className="text-center"><FaCheck className="icons"/> Best Hardware Hack:<br></br>EpiTech</h4>
                      <img src={best_hardware_biohack_2019}></img>
                      <p className>
                        EpiTech is a device that monitors skin blemishes to accurately determine the effectiveness of the product you are using.
                        It utilizes a micro spectrometer and cloud services to deliver real time data to patients and physicians while, determining the effectiveness of your acne treatment.
                      </p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                        <h4 className="text-center"><FaCloud className="icons"/> Best Humitarian Hack:<br></br>Air Quality Index Map</h4>
                        <img src={best_humanitarian_biohack_2019}></img>
                        <p className>
                          Air Quality Index Map allows environmentally conscious people to monitor current air quality indices (AQI) in their area.
                          The AQI map displays the current air conditions for any location through Google Maps so that users may know the air quality of places they plan to visit.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
              {/* End Biohack-winner-section*/}

              {/* Start FAQ-section*/}
                <div className="row section" id = "FAQs">
                  <div className="col-6">
                    <img src={ThinkingVirus} className="thinking-virus" />
                  </div>
                  <div className="col-md-6">
                  <h1>FAQs</h1>
                        <Accordion>
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="0">
                                What is a hackathon?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  A hackathon is a weekend-long event that invites
                                  curious minds to learn and build something new.
                                  You may pick up a project of your choosing to work
                                  on during the event to dive into a topic you've
                                  been meaning to explore. You also get to meet new
                                  friends as you work in a team of up to 4!
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>

                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="1">
                                Can I attend?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  If you are an undergraduate UCR student who is
                                  curious about hacking then of course! If you do
                                  not have any programming experience, CS mentors
                                  will be around to help. If you are interested in
                                  mentoring during this event, you can fill out a
                                  mentor application!
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>

                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="2">
                                Do I need to be a CS major or minor?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  No! BioHack encourages students who are curious
                                  about coding and health to create their coding
                                  project.
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>

                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="3">
                                How do I register?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  Applications to participate in BioHack 2019 are
                                  open now. Feel free to contact us at
                                  BioHack.UCR@gmail.com if you have any further
                                  questions.
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>

                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="4">
                                Does this cost money?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  Nope! This event is free to all students. We will
                                  provide food, snacks, a place to hack, swag, and
                                  prizes for the winners!
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>

                        <Accordion>
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="5">
                                Will there be hardware available?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  Yes! Hardware will be provided.
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>

                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="6">
                                What should I bring?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  Bring a valid student ID for admission, a laptop
                                  with a charger, and anything else you need to hack
                                  away!
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>

                          <Card>
                            <Card.Header>
                              <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="7">
                                Where do I sleep?
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="7">
                              <div className="cardBody">
                                <Card.Body>
                                <p>
                                  Since this event is a 12-hour event, sleeping over
                                  will not be necessary and will not be provided.
                                  </p>
                                </Card.Body>
                              </div>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </div>
                </div>
            </div>
            {/* End FAQ-section*/}

            {/*Contact section*/}
            <div className="contact">
              <div className="row text-center" >
                <div className="col-sm-3">
                  <a href="mailto:biohack.ucr@gmail.com"><FaEnvelope /></a>
                  <h5>Contact</h5>
                </div>
                <div className="col-sm-3">
                  <a href="https://www.facebook.com/UCRBioHack/"><FaFacebook/></a>
                  <h5>Facebook</h5>
                </div>
                <div className="col-sm-3">
                  <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagram/></a>
                  <h5>Instagram</h5>
                </div>
                <div className="col-sm-3">
                  <a href="https://biohack2019.slack.com/"><FaSlack /></a>
                  <h5>Slack</h5>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Landing;
