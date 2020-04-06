import React, { Component } from 'react';
import CheeringVirus from "../images/Icon_Red.PNG";
import {MdAnnouncement} from "react-icons/md";
class Announcements extends Component {
    render() {
        return (
          <div className="section fadeIn">
            <h1>
              <MdAnnouncement /> Announcements
            </h1>
            <div className="content" id="Announcements">
              <p>
                {/* <img src={CheeringVirus} className="virus" alt="Cheering Virus" />   */}
                <ul className="announcement-list">
                  <li>
                    {/* <strong> */}
                      Welcome back to a new quarter! We hope you all had a
                      wonderful spring break. In light of the COVID-19 pandemic,
                      we are sad to announce that BioHack 2020 will be canceled.
                      We were as excited as you were about this year’s
                      hackathon, and are as equally disappointed about these
                      turn of events. Though BioHack is not able to happen this
                      year, we wanted to extend our sincere gratitude for your
                      participation up to this point and thank you for your
                      enthusiasm in this event. Here are some resources to help
                      you navigate through this crisis:
                      <br></br>
                      <a
                        href="https://www.cdc.gov/coronavirus/2019-ncov/index.html
                    UCR"
                      >
                        Centers for Disease Control
                      </a>
                      <br></br>
                      <a href="https://ehs.ucr.edu/coronavirus ">
                        Campus Updates regarding COVID-19
                      </a>
                      <br></br>
                      Once again, our sincerest apologies for this
                      disappointment, and thank you very much for your
                      participation thus far. We promise to bring you a bigger
                      and better BioHack in 2021! If you have any questions or
                      concerns, please feel free to email us or message Tammi or
                      John through social media. Please stay safe and healthy,
                      remember to practice social distancing, and be kind and
                      considerate to your fellow peers during these uncertain
                      times. Until then, we eagerly look forward to the day we
                      can all gather again!
                    {/* </strong> */}
                  </li>
                  <li>
                    Priority registration for BioHack 2020 is now{" "}
                    <strong>open</strong>! The deadline for priority
                    registration is <strong>Friday, April 10th</strong>, so be
                    sure to sign up now!
                  </li>
                  {/* <br> */}
                  <li>
                    Priority registration opens on{" "}
                    <strong>Monday, February 24th</strong>! Follow us on social
                    media to be notified as soon as applications drop!
                  </li>
                  <li>
                    Want to <strong>help plan/organize BioHack 2020</strong>?
                    Come to our planning committee meetings!
                  </li>
                  <br />
                  <strong>
                    Operations: Tuesdays 10-11 a.m. in Bourns A171
                  </strong>
                  <br />
                  <strong>Marketing: Wednesdays 4-5 p.m. in WCH 203</strong>
                  <br />
                  <br />
                  <li>
                    Feel free to email <strong>biohack.ucr@gmail.com</strong> or
                    contact Tammi Tang/John Shin on social media for further
                    questions/inquiries!
                  </li>
                </ul>
              </p>
            </div>
          </div>
        );
    }
}

export default Announcements;
