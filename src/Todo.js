import React, { Component } from 'react'
import './Todo.css'
import styled from 'styled-components'

const Text = styled.div`
  &.done {
    text-decoration: line-through;
  }
`

export default class Todo extends Component {
  render() {
    const { text, done, onClick } = this.props
    return (
      <Text onClick={onClick} className={done ? 'done' : undefined}>
        {text}
      </Text>
    )
  }
}

//
