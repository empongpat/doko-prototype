
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from 'containers/layout/Navbar';

import Landing from 'containers/Landing'
import Career from 'containers/Career'
import Workshop from 'containers/Workshop'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/career" component={Career} />
          <Route path="/workshop" component={Workshop} />
        </Switch>
      </div>
    );
  }
}

export default App;