import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';
<<<<<<< HEAD

=======
>>>>>>> 8089f3e26173962339fc1bee3dba0f2803b8cd80
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Professionals from '~/pages/Professionals';
import AvaliableServices from '~/pages/AvailableServices';
import Budget from '~/pages/Budget';
import Curriculum from '~/pages/Curriculum';
import Contact from '~/pages/Contact';
<<<<<<< HEAD
=======

>>>>>>> 8089f3e26173962339fc1bee3dba0f2803b8cd80
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/professionals" component={Professionals} />
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
