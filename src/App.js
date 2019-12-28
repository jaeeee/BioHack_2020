import React, { Component } from 'react'

//import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter as Router,
   Route,
 //  Switch,
 //  Link,
 //  Redirect
  } from 'react-router-dom';

import Main from './components/main';
// import { Switch, Route} from 'react-router-dom';
// Pages
// import MainPage from './pages/index';
// import NotFoundPage from './pages/404';
// import UsersPage from './pages/users';

//import { Link } from 'react-router-dom'
//import ReactDOM from 'react-dom'
import LandingPage from './components/landingpage';


export class App extends Component {
  render() {
    return (
        <Router>
            <Route exact path="" component={LandingPage} />
            {/* <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/users" component={UsersPage} />
            <Redirect to="/404"/> */}
        </Router>
      
      // <div style={{ height: "100vh", position: "relative" }}>
      //   <Layout fixedHeader>
      //     <Header
      //       title={
      //         <span>
      //           <span style={{ color: "#ddd" }}>BioHack / </span>
      //           <strong>2020</strong>
      //         </span>
      //       }
      //     >
      //       <Navigation>
      //         <Link to="/">Home</Link>
      //         <Link to="/aboutme">About</Link>
      //         <Link to="/faq">FAQ</Link>
      //         <Link to="/projects">Projects</Link>
      //         {/* <Link to="/contact">Contact</Link> */}
      //       </Navigation>
      //     </Header>
      //     <Drawer title="Menu">
      //       <Navigation>
      //         <Link to="/">Home</Link>
      //         <Link to="/aboutme">About</Link>
      //         <Link to="/projects">Projects</Link>
      //         <Link to="/faq">FAQ</Link>
      //         {/* <Link to="/contact">Contact</Link> */}
      //       </Navigation>
      //     </Drawer>
      //     <Content>
      //       <div className="page-content" />
      //       <Main />
      //     </Content>
      //   </Layout>
      // </div>
    );
  }
}

export default App;
