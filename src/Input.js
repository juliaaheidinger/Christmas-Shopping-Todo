import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
  render() {
    return (
      <input
        name="gift-input"
        type="text"
        placeholder="Add Wishes Here..."
        onKeyUp={this.props.onEnter}
      />
    )
  }
}

//
