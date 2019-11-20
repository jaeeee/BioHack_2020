import React from 'react';

import {Switch, Route } from  'react-router-dom';

import LandingPage, { Landing } from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import FAQ from "./FAQ";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/FAQ" component={FAQ} />
  </Switch>
);

export default Main;