import React from 'react';
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Title from '../../title'

const MainContainer = styled.div`
  display: block;
  ${props =>
    props.center && css`
      text-align: -webkit-center;
      text-align: -moz-center;
    `
  }
`

const TitleHeader = styled(Title)`
  margin: 0;
  padding-top: 10px;
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
`

const Main = ({ title, children, showTitle }) => {
  return(
    <MainContainer>
      {showTitle && <TitleHeader>{title || null}</TitleHeader>}
      {children || null}
    </MainContainer>
  )
}

Main.propTypes = {
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Main.defaultProps = {
  title: "Title of page",
  showTitle: true
}

export default Main;
