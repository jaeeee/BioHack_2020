import React, { Component } from 'react'

import { BrowserRouter as Router,
   Route,
   Switch,
   Link,
   Redirect} from 'react-router-dom'

// Pages
import MainPage from './pages/index';
import NotFoundPage from './pages/404';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App
