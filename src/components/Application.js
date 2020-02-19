import React, { Component } from 'react'

import {FaLink} from 'react-icons/fa'

  const myelement = (
'<div class="cognito">'+
'<script src="https://services.cognitoforms.com/s/3aXBwbmc0kmbwMAqTRUz3Q"></script>'+
'<script>Cognito.load("forms", { id: "1" });</script>'+
'</div>'
);

//https://www.cognitoforms.com/UCRBioHack/BioHack2020HackerApplication

export class Application extends Component {
    render() {
        return (
          <div className="mt-5 section fadeIn text-center">
            <center>
              <h1>
                <FaLink /> Apply
              </h1>
              <div className="row mt-5">
                <div className="col">
                  {/* {myelement} */}
                  <p>
                    {" "}
                    Great! You made it just in time for priority registration!
                  </p>

                  <a href="https://www.cognitoforms.com/UCRBioHack/BioHack2020HackerApplication">
                    <div className="btn">Click here to apply to BioHack</div>
                  </a>
                </div>
              </div>
            </center>
          </div>
        );
    }
}

export default Application
