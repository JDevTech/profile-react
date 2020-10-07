import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 100%;
  border-radius: 3px;
  padding: 0.25em 1em;
  color: palevioletred;
  background: transparent;
  border: 2px solid palevioletred;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `
  }
`

export default Button;
