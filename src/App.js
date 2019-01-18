import React, { Component } from 'react'
import logo from './testingjavascript.jpg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Click the image to view full-screen</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Testing JavaScript Docs
          </a>
        </header>
      </div>
    )
  }
}

export default App
