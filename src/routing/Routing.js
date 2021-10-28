import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Bio from '../pages/Bio';
import Services from '../pages/Services';
import Donate from '../pages/Donate';

import FooterNav from '../components/FooterNav'

function Routing() {
  return (
    <>
        <FooterNav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/biography" component={Bio} />
            <Route path="/services" component={Services} />
            <Route path="/donate" component={Donate} />
        </Switch>
        <FooterNav />
    </>
  );
}

export default Routing;