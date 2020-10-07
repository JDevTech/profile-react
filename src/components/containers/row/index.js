import styled, { css } from 'styled-components'

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  ${props =>
    props.center ? css`
      text-align: -webkit-center;
      text-align: -moz-center;
    ` :  css`
      text-align: -webkit-left;
      text-align: -moz-left;
    `
  }
`

export default Row;
