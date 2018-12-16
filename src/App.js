import React, { Component } from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom'
import TransitionGroup from './transitionGroup'
import Spring from './spring'
import './App.css';
import history from './history'

function Home() {
  return <div>
    <p>Transition Animation Sample</p>
    <ul>
      <li>
        <NavLink to="/transitionGroup">TransitionGroup</NavLink>
      </li>
      <li>
        <NavLink to="/spring">Spring</NavLink>
      </li>
    </ul>
  </div>
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/transitionGroup" component={TransitionGroup} />
          <Route path="/spring" component={Spring} />
        </Switch>
      </Router>
    );
  }
}

export default App;
