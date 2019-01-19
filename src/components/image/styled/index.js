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
      object-fit: contain;
      height: 100vmin;
    `
  }
  return null
}

const StyledImage = styled.img`
  position: relative;
  height: 40vmin;
  animation: ${appLogoBounce} infinite 4s ease-in-out;
  ${getFullscreen};
  transition: 0.4s ease-in-out;
`

export default StyledImage
