import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
  render() {
    return (
      <input
        name="gift-input"
        type="text"
        placeholder="Dreams and wishes"
        onKeyUp={this.props.onEnter}
      />
    )
  }
}

//
