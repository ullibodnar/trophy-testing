import styled, { keyframes, css } from 'styled-components'

const appLogoBounce = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`

const getFullscreen = ({ fullscreen }) => {
  if (fullscreen) {
    return css`
      animation: none;
      height: 100vmin;
      &:hover {
        cursor: zoom-out;
      }
    `
  }
  return null
}

const StyledImage = styled.img`
  &:hover {
    cursor: zoom-in;
  }

  object-fit: contain;
  position: relative;
  height: 40vmin;
  max-width: 100%;
  animation: ${appLogoBounce} infinite 4s ease;
  ${getFullscreen};
  transition: 0.4s ease;
`

export default StyledImage
