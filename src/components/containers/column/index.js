import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const getWidthString = (span) => {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%;`
}

const ColumnContainer = styled.div`

  float: left;
  margin-top: 2%;
  margin-bottom: 2%;

  ${props => props.disabledMargin && css`
      margin-top: 0%;
      margin-bottom: 0%;
    `
   }

  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 768px){
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px){
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px){
    ${({ lg }) => lg && getWidthString(lg)};
  }
`

const ColumnBody = styled.div`
  padding: 0 15px !important;
  ${props => props.disabledPadding && css`
      padding: 0 !important;
    `
  }
`

const Column = ({ xs, sm, md, lg, children, disabledMargin, disabledPadding }) => {
  return (
    <ColumnContainer xs={xs} sm={sm} md={md} lg={lg} disabledMargin={disabledMargin}>
      <ColumnBody disabledPadding = {disabledPadding}>
        {children || null}
      </ColumnBody>
    </ColumnContainer>
  )
}

Column.propTypes = {
  disabledMargin: PropTypes.bool,
  disabledPadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Column.defaultProps = {
  disabledMargin: false,
  disabledPadding: false
}

export default Column;
