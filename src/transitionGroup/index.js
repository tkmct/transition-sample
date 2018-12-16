import React, { createContext, useContext, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Transition }from 'react-transition-group'
import AsyncLink from '../AsyncLink'
import classNames from 'classnames'
import './index.css'

const MountContext = createContext(false)

export default () => {
  const [ mountState, setMountState ] = useState(true)
  return <div>
    <h1>TransitionGroupSample</h1>
    <header>
      <ul>
        <li><AsyncLink to="/transitionGroup" onLeave={() => setMountState(false)}>Home</AsyncLink></li>
        <li><AsyncLink to="/transitionGroup/page1" onLeave={() => setMountState(false)}>Page1</AsyncLink></li>
        <li><AsyncLink to="/transitionGroup/page2" onLeave={() => setMountState(false)}>Page2</AsyncLink></li>
      </ul>
    </header>
    <MountContext.Provider value={mountState}>
      <Switch>
        <Route exact path="/transitionGroup" render={(props) => <Home onExit={() => setMountState(true)} />} />
        <Route path="/transitionGroup/page1" render={(props) => <Page1 onExit={() => setMountState(true)} />} />
        <Route path="/transitionGroup/page2" render={(props) => <Page2 onExit={() => setMountState(true)} />} />
      </Switch>
    </MountContext.Provider>
  </div>
}

// transitionState to use in TransitionGroup [in] props
// initially false, firstMounted, false to true
// Transition's state canges from exited to entering first.
// Then after timeout, state changes to entered
// When in props is changes from true to false,
// State changes from entered to exiting and after timeout milseconds changes to exited
const useTransitionState = (onUnMount) => {
  const [state, setState] = useState(false)
  const [isInitialMount, setIsInitialMount] = useState(true)
  const mountState = useContext(MountContext)
  useEffect(() => {
    if (isInitialMount) {
      setState(true)
      setIsInitialMount(false)
    }
    if (!mountState) {
      setState(false)
    }
    return () => {
      if (!mountState) {
        onUnMount()
      }
    }
  })
  return state
}

function Home({ onExit }) {
  const state = useTransitionState(onExit)
  console.info('Home state: ', state)

  return <Transition in={state} timeout={0}>
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
        </div>
    }
  </Transition>
}

function Page1({ onExit }) {
  const state = useTransitionState(onExit)
  console.info('page1 state: ', state)

  return <Transition in={state} timeout={0}>
    {
      (state) => 
        <div className={
          classNames(
            'transition-item',
            'transition-group--page1',
            state
          )
        }>
          <p>Page1</p>
          <span>{state}</span>
        </div>
    }
  </Transition>
}

function Page2({ onExit }) {
  const state = useTransitionState(onExit)
  console.info('page2 state: ', state)

  return <Transition in={state} timeout={0}>
    {
      (state) => 
        <div className={
          classNames(
            'transition-item',
            'transition-group--page2',
            state
          )
        }>
          <p>Page2</p>
          <span>{state}</span>
        </div>
    }
  </Transition>
}
