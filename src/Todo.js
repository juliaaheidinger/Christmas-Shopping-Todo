import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  render() {
    const { text, done, onClick } = this.props
    return (
      <li onClick={onClick} className={done ? 'done' : undefined}>
        {text}
      </li>
    )
  }
}

//
