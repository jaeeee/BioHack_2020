import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import './landingpage.css';
import ThinkingVirus from '../images/thinkingvirus.png';
import { Accordion, Card, Button } from 'react-bootstrap';
import Virus from "../images/virus.png";
import CheeringVirus from "../images/cheeringvirus.png"

export class Landing extends Component {
    render() {
        return (
          <div className="main-wrapper">

            <div className="container header">
              <h1>WELCOME TO <span style={{color:"#05386b"}}>BIOHACK</span>.</h1>
              <h3>May 16, 2020</h3>
            </div>

            <div className="container">
              <div className="row section">
                <div className="col-md-6">
                  <h1 style={{color:"#05386b"}}>What BioHack is All About</h1>
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
                <div className="col-md-6">
                  <img src={Virus} className="virus"/>
                </div>
              </div>

              <div className="row section">
                <div className="col-md-6">
                  <img src={CheeringVirus} className="cheeringVirus"/>
                </div>
                <div className="col-md-6">
                  <h1 style={{color:"#05386b"}}>Announcements</h1>
                  <p>
                    Want to help plan/organize BioHack 2020? Come out to the first BioHack 2020
                    Committee Info Meeting on Wednesday, November 20th, 2019 from 5-6 p.m.
                    in Bourns A265! We'd love to have you on board!
                  </p>
                </div>
              </div>

              <div className="row section">
                <div className="col-md-6">
                  <h1 style={{color:"#05386b"}}>Here are Some Previous Projects</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-md-6">
                </div>
              </div>

                <div className="row section">
                <div className="col-6">
                  <img src={ThinkingVirus} className="thinking-virus" />
                </div>
                <div className="col-md-6">
                <h1 style={{color:"#05386b"}}>FAQs</h1>
                    {/* <p>  */}
                    {/* Q: What is a hackathon? */}
                      <Accordion>
                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0">
                              What is a hackathon?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <div style={{ background: "#5cdb95" }}>
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

                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="1">
                              Can I attend?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <div style={{ background: "#5cdb95" }}>
                              <Card.Body>
                              <p>
                                If you are an undergraduate UCR student who is
                                curious about hackingm then of course! If you do
                                not have any programming experience, CS mentors
                                will be around to help. If you are interested in
                                mentoring during this event, you can fill out a
                                mentor application!
                                </p>
                              </Card.Body>
                            </div>
                          </Accordion.Collapse>
                        </Card>

                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="2">
                              Do I need to be a CS major or minor?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <div style={{ background: "#5cdb95" }}>
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

                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="3">
                              How do I register?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="3">
                            <div style={{ background: "#5cdb95" }}>
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

                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="4">
                              Does this cost money?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="4">
                            <div style={{ background: "#5cdb95" }}>
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
                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="5">
                              Will there be hardware available?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="5">
                            <div style={{ background: "#5cdb95" }}>
                              <Card.Body>
                              <p>
                                Yes! Hardware will be provided.
                                </p>
                              </Card.Body>
                            </div>
                          </Accordion.Collapse>
                        </Card>

                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="6">
                              What should I bring?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="6">
                            <div style={{ background: "#5cdb95" }}>
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

                        <Card style={{ background: "#5cdb95" }}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="7">
                              Where do I sleep?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="7">
                            <div style={{ background: "#5cdb95" }}>
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
                    {/* </p> */}
                </div>


            </div>
          </div>
        );
    }
}

export default Landing;
