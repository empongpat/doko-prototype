
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from 'containers/layout/Navbar';

import Landing from 'containers/Landing'
import Career from 'containers/Career'
import CareerList from 'containers/CareerList'
import CareerDetails from 'containers/CareerDetails'
import Workshop from 'containers/Workshop'
import CareerInterest from 'containers/CareerInterest'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/career/:category/:name" component={CareerDetails} />
          <Route path="/career/:category" component={CareerList} />
          <Route path="/career" component={Career} />
          <Route path="/workshop" component={Workshop} />
          <Route path="/interest" component={CareerInterest} />
        </Switch>
      </div>
    );
  }
}

export default App;