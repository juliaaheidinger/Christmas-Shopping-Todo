import React, { Component } from 'react'
import './App.css'
import Todo from './Todo'

class App extends Component {
  state = {
    isDone: false
  }

  gifts = ['Gutschein', 'Kamera-Stativ', 'Tee', 'Kaktus']

  render() {
    return (
      <ul>
        {this.gifts.map(gift => (
          <Todo text={gift} />
        ))}
      </ul>
    )
  }
}

export default App
