import React, { Component } from 'react'

import ThinkingVirus from '../images/thinkingvirus.png';

import { Accordion, Card, Button } from 'react-bootstrap';

export class FAQ extends Component {
    render() {
        return (
          // <div>
          <div style={{ background: "#93c48b" }}>
            <div className="container mt-5 p-5 content-section">
              <div className="row">
                <div className="col-md">
                  <h1 className="display-5">
                    <strong>Frequently Asked Questions</strong>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  {/* <p>  */}
                  {/* Q: What is a hackathon? */}
                  <div className="col-md">
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            What is a hackathon?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              A hackathon is a weekend-long event that invites
                              curious minds to learn and build something new.
                              You may pick up a project of your choosing to work
                              on during the event to dive into a topic you've
                              been meaning to explore. You also get to meet new
                              friends as you work in a team of up to 4!
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="1"
                          >
                            Can I attend?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              If you are an undergraduate UCR student who is
                              curious about hackingm then of course! If you do
                              not have any programming experience, CS mentors
                              will be around to help. If you are interested in
                              mentoring during this event, you can fill out a
                              mentor application!
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="2"
                          >
                            Do I need to be a CS major or minor?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              No! BioHack encourages students who are curious
                              about coding and health to create their coding
                              project.
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="3"
                          >
                            How do I register?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              Applications to participate in BioHack 2019 are
                              open now. Feel free to contact us at
                              BioHack.UCR@gmail.com if you have any further
                              questions.
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="4"
                          >
                            Does this cost money?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              Nope! This event is free to all students. We will
                              provide food, snacks, a place to hack, swag, and
                              prizes for the winners!
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
                            eventKey="5"
                          >
                            Will there be hardware available?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              Yes! Hardware will be provided
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="6"
                          >
                            What should I bring?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              Bring a valid student ID for admission, a laptop
                              with a charger, and anything else you need to hack
                              away!
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="7"
                          >
                            Where do I sleep?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7">
                          <div style={{ background: "#93c48b" }}>
                            <Card.Body>
                              Since this event is a 12-hour event, sleeping over
                              will not be necessary and will not be provided.
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* </p> */}
                </div>
                <div className="col-6">
                  <img src={ThinkingVirus} className="thinking-virus" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default FAQ;