import React, { Component } from 'react'
import './App.css'
import Todo from './Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo text="HUHU" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
