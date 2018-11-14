import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid black;
  background: #ffffff;
  border-radius: 5px;
  min-width: 30px;
`

export default class Delete extends Component {
  render() {
    return <Button onClick={this.props.onClick}> &times;</Button>
  }
}

//
