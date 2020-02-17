import React, { Component } from 'react';
// import Image from '../images/backdrop2.png'
// import './HomePage.css'

// const styles = {
//   paperContainer: {
//     // backgroundColor: '#000000',
//     backgroundImage: `url(${Image})`,
//     // height: "100%",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     width: "100%",
//     height: "800px"
//   }
// };


// componentWillUnmount() {
//     document.body.style.backgroundImage = null;
// }

class Home extends Component {
  componentWillUnmount() {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
  }
  render() {
    document.body.style.backgroundImage = `url(${Image})`;
    document.body.style.backgroundSize = `cover`;

    return (
      //  <div style={styles.paperContainer}>
      <div className="hero fadeIn">
        <h1>
          WELCOME TO <span style={{ color: "#e2eb98" }}>BIOHACK</span>.
        </h1>
        <h3>16 MAY 2020</h3>
      </div>
      //   </div>
    );
  }
}

export default Home;
