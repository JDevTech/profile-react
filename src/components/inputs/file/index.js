import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: inline-block;
`

const Input = styled.input.attrs(props => ({ type: "file" }))`
  top: 0;
  left: 0;
  opacity: 0;
  font-size: 100px;
  position: absolute;
`

const Button = styled.button`
  color: gray;
  font-size: 15px;
  padding: 8px 20px;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid gray;
  background-color: white;
`

const FileInput = (props) => {
  return (
    <InputContainer>
      <Button disabled={props.disabled}>{props.title}</Button>
      <Input {...props}/>
    </InputContainer>
  )
}

FileInput.propTypes = {
  title: PropTypes.string
}

FileInput.defaultProps = {
  title: "Upload a file"
}

export default FileInput;
