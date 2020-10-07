import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const H1 = styled.h1`
  margin: 0;
  font-family: 'ralewayregular_bold';
`

const H2 = styled.h2`
  margin: 0;
  font-family: 'ralewayregular_bold';
`

const H3 = styled.h3`
  margin: 0;
  font-family: 'ralewayregular_bold';
`

const H4 = styled.h4`
  margin: 0;
  font-family: 'ralewayregular_bold';
`

const H5 = styled.h5`
  margin: 0;
  font-family: 'ralewayregular_bold';
`

const Title = ({ size, children, className }) => {

  const renderTitle = (size) => {
    switch (size) {
      case "1":
        return <H1 className={className}>{children || null}</H1>;
      case "2":
        return <H2 className={className}>{children || null}</H2>;
      case "3":
        return <H3 className={className}>{children || null}</H3>;
      case "4":
        return <H4 className={className}>{children || null}</H4>;
      case "5":
        return <H5 className={className}>{children || null}</H5>;
      default:
        return <H1 className={className}>{children || null}</H1>;
    }
  }

  return renderTitle(size);
}

Title.propTypes = {
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired
}

export default Title;
