import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import Home from '../pages/Home';
// import Professionals from '~/pages/Professionals';
import AvaliableServices from '~/pages/AvailableServices';
import Budget from '~/pages/Budget';
import Curriculum from '~/pages/Curriculum';
import Contact from '~/pages/Contact';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/services" component={AvaliableServices} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/budgets" component={Budget} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

/**
 *
 * <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/manager" component={Manager} isPrivate />
      <Route path="/details" component={Details} isPrivate />
 */
