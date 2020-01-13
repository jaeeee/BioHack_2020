import React, { Component } from "react";
import {FaBabyCarriage, FaHardHat, FaGoogle, FaBrain, FaAllergies, FaSun, FaCloud, FaCheck} from 'react-icons/fa'
import best_beginner_biohack_2019 from "../images/best_beginner_biohack_2019.jpg";
import best_google_biohack_2019 from "../images/best_google_biohack_2019.jpg";
import best_hardware_biohack_2019 from "../images/best_hardware_biohack_2019.jpg";
import best_humanitarian_biohack_2019 from "../images/best_humanitarian_biohack_2019.jpg";
import overall_first_biohack_2019 from "../images/overall_first_biohack_2019.jpg";
import {GiPodium, GiPodiumWinner, GiHumanPyramid} from "react-icons/gi";
import SlideView from './SlideView';
import WinnerCard from './WinnerCard';

const projects = [
      {
        icon1: <FaBrain/>,
        icon2: <GiPodiumWinner/>,
        category: "Overall 1st Place",
        projectName: "Remembrall",
        image: overall_first_biohack_2019,
        description: "Remembrall is a companion app that was created for those suffering from Alzheimer's and Dementia. Rememberall helps users remember important details of their life by using real time user entered data. The user can input their thoughts, memories, pictures and important information about themselves to aid throughout their daily lives.",
      },
      {
        icon1: <FaAllergies/>,
        icon2: <FaGoogle/>,
        category: "Best Google Hack",
        projectName: "Skancare",
        image: best_google_biohack_2019,
        description: "Skancare aims to bring awareness to skin ailments by utilizing machine learning to classify skin lesions. This program takes a close-up image of the skin and analyzes it to identify the lesion type. Skancare aims to make lesion diagnoses easier to identify."
      },
      {
        icon1: <FaSun/>,
        icon2: <FaBabyCarriage/>,
        category: "Best Beginner Hack",
        projectName: "Sleep-Stone Bridge",
        image: best_beginner_biohack_2019,
        description: " Sleep-Stone Bridge is a device that monitors the amount of excess light the user is exposed to. Excess light can cause a person’s regular 24-hour Circadian Rhythm to be disrupted and lead health risks such as lack of sleep. This project alerts the user with light sensors during evening hours to lower light levels to preserve the Circadian Rhythm."
      },
      {
        icon1: <FaCheck/>,
        icon2: <FaHardHat/>,
        category: "Best Hardware Hack",
        projectName: "EpiTech",
        image: best_hardware_biohack_2019,
        description: "EpiTech is a device that monitors skin blemishes to accurately determine the effectiveness of the product you are using. It utilizes a micro spectrometer and cloud services to deliver real time data to patients andphysicians while, determining the effectiveness of your acne treatment."
      },
      {
        icon1: <FaCloud/>,
        icon2: <GiHumanPyramid/>,
        category: "Best Humitarian Hack",
        projectName: "Air Quality Index Map",
        image: best_humanitarian_biohack_2019,
        description: "Air Quality Index Map allows environmentally conscious people to monitor current air quality indices (AQI) in their area. The AQI map displays the current air conditions for any location through Google Maps so that users may know the air quality of places they plan to visit."
      }
]

export class Projects extends Component {
  state = {
    responsiveSettings : [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false
        }
      },
    ]
  }

  render() {
    return (
        <div className="mt-5 section fadeIn" id="Winners2019">
          <h1 className="text-center" >
            <GiPodium/> BioHack 2019 Winners
          </h1>
          <div className="mt-5 mb-5">
            <SlideView responsiveSettings={this.state.responsiveSettings}>
              {projects.map((project, index) => (
                <WinnerCard
                icon1={project.icon1}
                icon2={project.icon2}
                category={project.category}
                projectName={project.projectName}
                image={project.image}
                description={project.description}
                key = {index  }
              />
              ))}
            </SlideView>
          </div>
        </div>
    );
  }
}

export default Projects;


// {/* <div className="col-lg-4">
//                 <div className="biohack-winners">
//                   <h4 className="text-center" style={{ color: "#5cdb95" }}>
//                     {" "}
//                     Best Startup Hack:<br></br>Drowsy Drivers
//                   </h4>
//                   <FaCar
//                     style={
//                       {
//                       fontSize: "110px",
//                       color:"#5cdb95",
//                       marginTop:"32px",
//                       marginBottom:"32px"
//                       }
//                     }
//                   />
//                   />
//                   <p>
//                     The Drowsy Driver’s program detects user awareness by
//                     examining images taken of the driver's face. Using
//                     MATLAB, the program isolates the driver’s eyes and
//                     determines whether the user's eyes are open or closed.
//                     The user will then receive notification that their eyes
//                     are closed and will be adjust their driving accordingly.
//                   </p>
//                 </div>
//               </div> */}
