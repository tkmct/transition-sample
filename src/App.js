import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import TransitionGroup from './transitionGroup'
import './App.css';

function Home() {
  return <div>
    <p>Transition Animation Sample</p>
    <NavLink to="/transitionGroup">TransitionGroup</NavLink>
  </div>
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/transitionGroup" component={TransitionGroup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
