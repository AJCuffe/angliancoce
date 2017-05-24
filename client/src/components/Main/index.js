import React from 'react';
import { Switch, Route } from 'react-router'

import COCEMembers from '../COCEMembers';
import BenchMembers from '../BenchMembers';
import Opportunities from '../Opportunities';
import Dashboard from '../Dashboard';

class Main extends React.Component {
  render() {
    return(
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/coce" component={COCEMembers}/>
        <Route path="/bench" component={BenchMembers}/>
        <Route path="/opp" component={Opportunities}/>
      </Switch>
    );
  }
}

export default Main;
