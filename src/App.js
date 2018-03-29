
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import Navbar from 'containers/layout/Navbar';

import Landing from 'containers/Landing'
import Career from 'containers/Career'
import Workshop from 'containers/Workshop'

const Page = ({ title }) => (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
      <p>
        <Link to="/career">Career</Link>
      </p>
      <p>
        <Link to="/workshop">Workshop</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

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