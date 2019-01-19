import React, { useState } from 'react'
import StyledImage from './styled'

import logo from './testingjavascript.jpg'

const Image = () => {
  const [fullscreen, setFullscreen] = useState(false)

  function handleClick () {
    setFullscreen(!fullscreen)
  }

  return (
    <StyledImage
      src={logo}
      className='App-logo'
      alt='logo'
      onClick={handleClick}
      fullscreen={fullscreen}
    />
  )
}

export default Image
