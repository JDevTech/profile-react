import React from 'react';

//CUSTOM COMPONENTS
import profile from '../../assets/img/profile.png'
import { Card, AvatarProfile, Row, Main, Column, LabelValue } from '../../components'


const ProfilePage = (props) => {
  return(
    <Main title="Profile Page">

      <Row>
        <Column sm="6" md="4">
          <Card>
            <AvatarProfile imageSrc={profile} title="Juan David Marcillo Alba" subTitle="Software Engineer" />
          </Card>
        </Column>

        <Column sm="6" md="8">
          <Card>
            <Row>
              <Column sm="4" md="4" lg="4">
                <LabelValue label="University:" value="Autonoma de Occidente"/>
              </Column>
              <Column sm="3" md="3" lg="3">
                <LabelValue label="Age:" value="23"/>
              </Column>
              <Column sm="5" md="5" lg="5">
                <LabelValue label="Hobbies:" value="Play the guitar, VideoGames and listen to music"/>
              </Column>
            </Row>
            <Row>
              <Column sm="4" md="4" lg="4">
                <LabelValue label="Skills:" value="Javascript, CSS, Html, Java, PHP"/>
              </Column>
              <Column sm="3" md="3" lg="3">
                <LabelValue label="English Level:" value="B1"/>
              </Column>
              <Column sm="4" md="4" lg="4">
                <LabelValue label="Years of Experience:" value="Four years as FullStack Developer"/>
              </Column>
            </Row>
          </Card>
        </Column>
      </Row>

    </Main>
  )
}

export default ProfilePage;
