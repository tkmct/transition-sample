import React, { useState, useCallback } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { useTransition, animated } from 'react-spring/hooks'

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

const items = ['Hello', 'World', 'There']
function Home() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set((index + 1) % 3))
  const transitions = useTransition({
    items: items[index],
    keys: item => item,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  return <div onClick={onClick} style={{textAlign: 'center', height: 300, fontSize: 24}}>{ 
    transitions.map(({item, key, props}) => <animated.div style={props}>{item}</animated.div>) 
  }</div>
}

function Page1() {
  return <h2>Page1</h2>
}

function Page2() {
  return <h2>Page2</h2>
}