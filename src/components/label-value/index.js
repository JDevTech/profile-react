import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

const Label = styled.label`
  font-family: "ralewayregular_bold";
  margin-right: 5px;
  font-size: 15px
`

const Value = styled.span`
  font-size: 15px
`

const LabelValue = ({label, value}) => {
  return(
    <>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </>
  )
}

LabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

LabelValue.defaultProps = {
  label: "",
  value: "",
}

export default LabelValue;
