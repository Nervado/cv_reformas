import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';
import Home from '../pages/Home';
import Professionals from '~/pages/Professionals';
import AvaliableServices from '~/pages/AvailableServices';
import Budgets from '~/pages/Budgets';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/professionals" exact component={Professionals} />
      <Route path="/services" exact component={AvaliableServices} />
      <Route path="/budgets" exact component={Budgets} />
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
