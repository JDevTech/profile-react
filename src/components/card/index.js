import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

const CardContainer = styled.div`
  border: 0;
  width: 100%;
  min-width: 0;
  display: flex;
  background: #FFF;
  border-radius: 6px;
  position: relative;
  font-size: .875rem;
  word-wrap: break-word;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
`

const CardBody = styled.div`
  padding: 20px 20px;
`

const Card = ({ children }) => {
  return(
    <CardContainer>
      <CardBody>
        {children || null}
      </CardBody>
    </CardContainer>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired
}

export default Card;
