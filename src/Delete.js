import React, { Component } from 'react'
import './Delete.css'

export default class Delete extends Component {
  render() {
    return <button onClick={this.props.onClick}> &times;</button>
  }
}

//
