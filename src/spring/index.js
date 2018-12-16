import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

export default function Spring() {
  return <div>
    <h1>
      React Spring
    </h1>
    <header>
      <ul>
        <li><NavLink to="/spring">Home</NavLink></li>
        <li><NavLink to="/spring/page1">Page1</NavLink></li>
        <li><NavLink to="/spring/page2">Page2</NavLink></li>
      </ul>
    </header>
    <Switch>
      <Route exact path="/spring" render={(props) => <Home />} />
      <Route path="/spring/page1" render={(props) => <Page1 />} />
      <Route path="/spring/page2" render={(props) => <Page2 />} />
    </Switch>
  </div>
}

function Home() {
  return <h2>Home</h2>
}

function Page1() {
  return <h2>Page1</h2>
}

function Page2() {
  return <h2>Page2</h2>
}