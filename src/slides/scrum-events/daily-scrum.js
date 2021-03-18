import React from 'react';
import SpeakerNotes from '../../components/Notes';
import { FlexBox, Heading, Slide, Notes, Image } from 'spectacle';
import imgDaily from './images/daily-scrum.png';
import notes from './notes/daily-scrum.md';
// https://agilescrumgroup.nl/wp-content/uploads/Daily-Stand-up.png

export default (
  <Slide backgroundColor="bgEvents">
    <Heading>Daily Scrum</Heading>
    <FlexBox style={{
      alignItems: 'flex-start'
    }}>
      <Image src={imgDaily} style={{ height: '65%'}} />
    </FlexBox>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);