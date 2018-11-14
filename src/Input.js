import React, { Component } from 'react'
//import './Input.css'
import styled from 'styled-components'

const Wrapper = styled.input`
  background: #019bb7;
  padding: 20px;
  margin: 30px;
  border: 4px solid #006375;
  border-radius: 0px;
  color: #ffffff;
  height: 30px;
  font-size: 16px;

  ::-webkit-input-placeholder {
    color: #ffffff;
    font-size: 16px;
  }
`

export default class Input extends Component {
  onEnter = event => {
    if (event.key === 'Enter') {
      this.props.onEnter(event.target.value)
      event.target.value = ''
    }
  }
  render() {
    return (
      <Wrapper
        name="gift-input"
        type="text"
        placeholder="Add Wishes Here..."
        onKeyUp={this.onEnter}
      />
    )
  }
}

//
