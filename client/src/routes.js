// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Switch {...props}>
    <Route path="/" exact component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
