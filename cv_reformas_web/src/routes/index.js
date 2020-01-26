import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
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
