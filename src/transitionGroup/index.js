import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Transition }from 'react-transition-group'
import AsyncLink from '../AsyncLink'
import classNames from 'classnames'
import './index.css'

export default class TransitionGroupSample extends React.Component {
  render() {
    return <div>
      <h1>TransitionGroupSample</h1>
      <header>
        <ul>
          <li><AsyncLink to="/transitionGroup">Home</AsyncLink></li>
          <li><AsyncLink to="/transitionGroup/page1">Page1</AsyncLink></li>
          <li><AsyncLink to="/transitionGroup/page2">Page2</AsyncLink></li>
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
  const [inState, setInState] = useState(false)
  const [isInitialMount, setIsInitialMount] = useState(true)
  useEffect(() => {
    if (isInitialMount) {
      setInState(true)
      setIsInitialMount(false)
    }
  })

  return <Transition in={inState} timeout={0}>
    {
      (state) => 
        <div className={
          classNames(
            'transition-item',
            'transition-group--home',
            state
          )
        }>
          <p>Home</p>
          <span>{state}</span>
          <button onClick={() => setInState(false)}>Exit</button>
        </div>
    }
  </Transition>
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