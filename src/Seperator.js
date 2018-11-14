import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  margin: 0 10px;
  border-bottom: ${props => props.width || 4}px solid white;
`

const Text = styled.span`
  white-space: nowrap;
  color: #ffffff;
  font-size: 20px;
`

export default class Seperator extends Component {
  render() {
    return (
      <Wrapper>
        <Line />
        <Text>{this.props.text}</Text>
        <Line />
      </Wrapper>
    )
  }
}

//
