import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  render() {
    const { onClick, text, isDone } = this.props
    return (
      <li onClick={onClick} className={isDone ? 'Todo done' : 'Todo'}>
        {text}
      </li>
    )
  }
}

//
