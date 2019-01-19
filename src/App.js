import React from 'react'
import './App.css'

import Image from './components/image'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Image />
        <p>Click the image to view full-screen</p>
        <a
          className='App-link'
          href='https://testing-library.com/react'
          target='_blank'
          rel='noopener noreferrer'
        >
          Testing JavaScript Docs
        </a>
      </header>
    </div>
  )
}

export default App
