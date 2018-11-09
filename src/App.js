import React, { Component } from 'react'
import './App.css'
import Todo from './Todo'
import Input from './Input'
import Delete from './Delete'

class App extends Component {
  state = {
    gifts: [
      // { text: 'Gutschein', done: true },
      // { text: 'Kaktus', done: false },
      // { text: 'Blumen', done: true },
      // { text: 'Kochtopf', done: false }
    ]
  }

  toggleDone = index => {
    const { gifts } = this.state
    const newGifts = [
      ...gifts.slice(0, index),
      { ...gifts[index], done: !gifts[index].done },
      ...gifts.slice(index + 1)
    ]

    this.setState({
      gifts: newGifts
    })
  }

  onEnter(event) {
    if (event.key === 'Enter') {
      this.addNewGift(event)
      event.target.value = ''
    }
  }

  addNewGift(event) {
    const { gifts } = this.state
    const newGifts = [{ text: event.target.value, done: false }, ...gifts]
    this.setState({
      gifts: newGifts
    })
  }

  deleteListItem = index => {
    const { gifts } = this.state
    const newGifts = [...gifts.slice(0, index), ...gifts.slice(index + 1)]

    this.setState({
      gifts: newGifts
    })
  }

  render() {
    return (
      <div className="container">
        <Input onEnter={event => this.onEnter(event)} />
        <ul>
          {this.state.gifts.map((gift, index) => (
            <div className="listItem" key={`listItem${index}`}>
              <Todo
                key={`todo${index}`}
                text={gift.text}
                done={gift.done}
                onClick={() => this.toggleDone(index)}
              />
              <Delete
                key={`delete${index}`}
                onClick={() => this.deleteListItem(index)}
              />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
