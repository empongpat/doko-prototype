
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import Navbar from 'containers/layout/Navbar';

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/career" component={About} />
        <Route path="/workshop" component={Settings} />
      </Switch>
    );
  }
}

export default App;