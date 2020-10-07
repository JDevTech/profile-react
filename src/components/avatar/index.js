import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Title from '../title'
import { Column, Row } from '../containers'
import profile_placeholder from '../../assets/img/profile-placeholder.png'

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 5% 0% 5% 0%;
  background-size: 150px;
  background-repeat: no-repeat;
  background-position-y: center;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  ${props =>
    css`
      background-image: url(${props.imageSrc || profile_placeholder});
    `
  }
`

const AvatarProfile = ({ imageSrc, title, subTitle }) => {
  return(
    <Column sm="12" md="12" lg="12">
      <Row center>
        <Avatar imageSrc={imageSrc || null}/>
      </Row>
      <Row center>
        <Title size="2">{title || null}</Title>
        <Title size="3">{subTitle || null}</Title>
      </Row>
    </Column>
  )
}

AvatarProfile.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default AvatarProfile
