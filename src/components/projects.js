import React, { Component } from "react";

import best_beginner_biohack_2019 from "../images/best_beginner_biohack_2019.jpg";
import best_google_biohack_2019 from "../images/best_google_biohack_2019.jpg";
import best_hardware_biohack_2019 from "../images/best_hardware_biohack_2019.jpg";
import best_humanitarian_biohack_2019 from "../images/best_humanitarian_biohack_2019.jpg";
import overall_first_biohack_2019 from "../images/overall_first_biohack_2019.jpg";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBBtn,
//   MDBCard,
//   MDBCardBody
// } from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Projects extends Component {
  render() {
    return (
      <div>
        {/* <MDBCardBody> */}
          {/* <MDBCard> */}
            {/* <MDBContainer> */}
              {/* <div className="mt-5 section">
               */}
              <div className="container mt-5 p-5 content-section">
                <h1 className="text-center" >
                  BioHack 2019 Winners
                </h1>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                      <h4 className="text-center" style={{ color: "#5cdb95" }}>
                        <FontAwesomeIcon icon="brain" className="icons" />{" "}
                        Overall 1st Place:<br></br> Remembrall
                      </h4>
                      <img src={overall_first_biohack_2019}></img>
                      <p>
                        Remembrall is a companion app that was created for those
                        suffering from Alzheimer's and Dementia. Rememberall
                        helps users remember important details of their life by
                        using real time user entered data. The user can input
                        their thoughts, memories, pictures and important
                        information about themselves to aid throughout their
                        daily lives.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                      <h4 class="text-center" style={{ color: "#5cdb95" }}>
                        <FontAwesomeIcon icon="allergies" className="icons" />{" "}
                        Best Google Hack:<br></br>Skancare
                      </h4>
                      <img src={best_google_biohack_2019}></img>
                      <p>
                        Skancare aims to bring awareness to skin ailments by
                        utilizing machine learning to classify skin lesions.
                        This program takes a close-up image of the skin and
                        analyzes it to identify the lesion type. Skancare aims
                        to make lesion diagnoses easier to identify.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                      <h4 className="text-center" style={{ color: "#5cdb95" }}>
                        <FontAwesomeIcon icon="sun" className="icons" /> Best
                        Beginner's Hack:<br></br>Sleep-Stone Bridge
                      </h4>
                      <img src={best_beginner_biohack_2019}></img>
                      <p>
                        Sleep-Stone Bridge is a device that monitors the amount
                        of excess light the user is exposed to. Excess light can
                        cause a person’s regular 24-hour Circadian Rhythm to be
                        disrupted and lead health risks such as lack of sleep.
                        This project alerts the user with light sensors during
                        evening hours to lower light levels to preserve the
                        Circadian Rhythm.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                      <h4 className="text-center" style={{ color: "#5cdb95" }}>
                        {" "}
                        Best Startup Hack:<br></br>Drowsy Drivers
                      </h4>
                      <FontAwesomeIcon
                        icon="car"
                        style={{
                          fontSize: "110px",
                          color: "#5cdb95",
                          marginTop: "32px",
                          marginBottom: "32px"
                        }}
                      />
                      <p>
                        The Drowsy Driver’s program detects user awareness by
                        examining images taken of the driver's face. Using
                        MATLAB, the program isolates the driver’s eyes and
                        determines whether the user's eyes are open or closed.
                        The user will then receive notification that their eyes
                        are closed and will be adjust their driving accordingly.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners ">
                      <h4 className="text-center" style={{ color: "#5cdb95" }}>
                        <FontAwesomeIcon icon="check" className="icons" /> Best
                        Hardware Hack:<br></br>EpiTech
                      </h4>
                      <img src={best_hardware_biohack_2019}></img>
                      <p className>
                        EpiTech is a device that monitors skin blemishes to
                        accurately determine the effectiveness of the product
                        you are using. It utilizes a micro spectrometer and
                        cloud services to deliver real time data to patients and
                        physicians while, determining the effectiveness of your
                        acne treatment.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="biohack-winners">
                      <h4 className="text-center" style={{ color: "#5cdb95" }}>
                        <FontAwesomeIcon icon="cloud" className="icons" /> Best
                        Humitarian Hack:<br></br>Air Quality Index Map
                      </h4>
                      <img src={best_humanitarian_biohack_2019}></img>
                      <p className>
                        Air Quality Index Map allows environmentally conscious
                        people to monitor current air quality indices (AQI) in
                        their area. The AQI map displays the current air
                        conditions for any location through Google Maps so that
                        users may know the air quality of places they plan to
                        visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            {/* </MDBContainer> */}
          {/* </MDBCard> */}
        {/* </MDBCardBody> */}
      </div>
    );
  }
}

export default Projects;
