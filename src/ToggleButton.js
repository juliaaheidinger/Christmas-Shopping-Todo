import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  margin-left: auto;

  &.active {
    background: teal;
  }
`

export default class ToggleButton extends Component {
  //startwert
  state = {
    isDefault: this.props.isDefault == null ? true : this.props.isDefault
  }

  handleToggle = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state
    return (
      <Wrapper
        className={isDefault ? '' : 'active'}
        onClick={this.handleToggle}
      >
        {isDefault ? defaultText : alternativeText}
      </Wrapper>
    )
  }
}

//
