import React, { Component } from 'react'
import './App.css'
import Todo from './Todo'

class App extends Component {
  state = {
    gifts: [
      { text: 'Gutschein', done: true },
      { text: 'Kaktus', done: false },
      { text: 'Blumen', done: true },
      { text: 'Kochtopf', done: false }
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

  render() {
    return (
      <ul>
        {this.state.gifts.map((gift, index) => (
          <Todo
            text={gift.text}
            done={gift.done}
            onClick={() => this.toggleDone(index)}
          />
        ))}
      </ul>
    )
  }
}

export default App
