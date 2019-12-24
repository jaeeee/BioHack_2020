import React, { Component } from 'react'

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter as Router,
   Route,
   Switch,
   Link,
   Redirect} from 'react-router-dom';

// import Main from './components/main';
// import { Switch, Route} from 'react-router-dom';
// Pages
// import MainPage from './pages/index';
// import NotFoundPage from './pages/404';
// import UsersPage from './pages/users';

import Main from './components/main';
// import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBrain, faAllergies, faCar, faSun, faCloud, faCheck, faEnvelope} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBrain, faAllergies, faCar, faSun, faCloud, faCheck, faEnvelope)

export class App extends Component {
  render() {
    return (
      // return (
      //   <Router>
      //     <Switch>
      //       <Route exact path="/" component={MainPage} />
      //       <Route exact path="/404" component={NotFoundPage} />
      //       <Route exact path="/users" component={UsersPage} />
      //       <Redirect to="/404"/>
      //     </Switch>
      //   </Router>
      // );
      <div style={{ height: "100vh", position: "relative" }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>BioHack / </span>
                <strong>2020</strong>
              </span>
            }
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/aboutme">About</Link>
              <Link to="/projects">Projects</Link>
              {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/aboutme">About</Link>
              <Link to="/projects">Projects</Link>
              {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
