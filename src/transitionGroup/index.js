import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './index.css'

export default class TransitionGroupSample extends React.Component {
  render() {
    return <div>
      <h1>TransitionGroupSample</h1>
      <header>
        <ul>
          <li><NavLink to="/transitionGroup">Home</NavLink></li>
          <li><NavLink to="/transitionGroup/page1">Page1</NavLink></li>
          <li><NavLink to="/transitionGroup/page2">Page2</NavLink></li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/transitionGroup" component={Home} />
        <Route path="/transitionGroup/page1" component={Page1} />
        <Route path="/transitionGroup/page2" component={Page2} />
      </Switch>
    </div>
  }
}

function Home() {
  return <div className="transition-group--home">
    <p>Home</p>
  </div>
}

function Page1() {
  return <div className="transition-group--page1">
    <p>Page1</p>
  </div>
}

function Page2() {
  return <div className="transition-group--page2">
    <p>Page2</p>
  </div>
}