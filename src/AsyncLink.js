import React from 'react'
import history from './history' // TODO: access via ContextAPI
import { delay } from './utils'
const TRANSITION_TIME = 1000;

const AsyncLink = ({ children, to, onLeave, timeout = TRANSITION_TIME }) => {
  async function transition(e) {
    e.preventDefault()
    if (onLeave) {
      onLeave()
    }

    await delay(timeout)
    history.push(to)
  }

  return <a onClick={transition}>{children}</a>
}

export default AsyncLink