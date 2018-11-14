import React, { Component } from 'react'
import uid from 'uid'
import Todo from './Todo'
import Input from './Input'
import Delete from './Delete'
import Seperator from './Seperator'
import ProgressBar from './ProgressBar'
import ToggleButton from './ToggleButton'
import styled from 'styled-components'
import ListItem from './ListItem'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;
  box-sizing: border-box;
  background: #105a68;
  border-radius: 5px;
  border: solid 2px #858787;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`

class App extends Component {
  state = {
    gifts: this.load()
  }

  toggleDone = id => {
    const { gifts } = this.state
    const index = gifts.findIndex(gift => gift.id === id)
    const newGifts = [
      ...gifts.slice(0, index),
      { ...gifts[index], done: !gifts[index].done },
      ...gifts.slice(index + 1)
    ]

    this.setState({
      gifts: newGifts
    })
  }

  addNewGift = inputText => {
    const { gifts } = this.state
    const newGifts = [{ text: inputText, done: false, id: uid() }, ...gifts]
    this.setState({
      gifts: newGifts
    })
  }

  deleteListItem = id => {
    const { gifts } = this.state
    const index = gifts.findIndex(gift => gift.id === id)
    const newGifts = [...gifts.slice(0, index), ...gifts.slice(index + 1)]

    this.setState({
      gifts: newGifts
    })
  }

  renderOpenTodos() {
    return this.state.gifts
      .filter(gift => !gift.done)
      .map(gift => (
        <ListItem key={gift.id} className="listItem">
          <Todo
            text={gift.text}
            done={gift.done}
            onClick={() => this.toggleDone(gift.id)}
          />
          <Delete onClick={() => this.deleteListItem(gift.id)} />
        </ListItem>
      ))
  }

  renderDoneTodos() {
    return this.state.gifts
      .filter(gift => gift.done)
      .map(gift => (
        <ListItem key={gift.id} className="listItem">
          <Todo
            text={gift.text}
            done={gift.done}
            onClick={() => this.toggleDone(gift.id)}
          />
          <Delete onClick={() => this.deleteListItem(gift.id)} />
        </ListItem>
      ))
  }

  getProgressBarWidth() {
    const { gifts } = this.state
    const doneGifts = gifts.filter(gift => gift.done)
    return doneGifts.length / gifts.length
  }

  render() {
    this.save()
    return (
      <Wrapper>
        <ProgressBar width={this.getProgressBarWidth()} />
        <ToggleButton
          defaultText="Foo"
          alternativeText="Bar"
          isDefault={true}
          onClick={() => console.log('hallo')}
        />
        <Input onEnter={this.addNewGift} />
        <div>
          <Seperator text="ToDos" />
          <ul>{this.renderOpenTodos()}</ul>
          <Seperator text="Done" />
          <ul>{this.renderDoneTodos()}</ul>
        </div>
      </Wrapper>
    )
  }

  save() {
    localStorage.setItem('todo-app--gifts', JSON.stringify(this.state.gifts))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--gifts')) || []
    } catch (err) {
      return []
    }
  }
}

export default App
