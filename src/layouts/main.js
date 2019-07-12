import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Contact from './contact';
import About from './aboutme';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
    </Switch>
)

export default Main;