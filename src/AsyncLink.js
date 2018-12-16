import React from 'react'
import history from './history' // TODO: access via ContextAPI
import { delay } from './utils'
const TRANSITION_TIME = 500;

const AsyncLink = ({ children, to, onClick, timeout = TRANSITION_TIME }) => {
  async function transition(e) {
    e.preventDefault()
    if (onClick) {
      onClick()
    }

    await delay(timeout)
    history.push(to)
  }

  return <a onClick={transition}>{children}</a>
}

export default AsyncLink