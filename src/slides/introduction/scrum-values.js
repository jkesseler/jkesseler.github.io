import React from 'react';
import { Heading, FlexBox, Slide, Notes, Image } from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notes from './notes/scrum-values.md';
import image from './images/scrum-values.png';

export default (
  <Slide backgroundColor="bgIntroduction">
    <Heading>Kernwaarden van Scrum</Heading>
    <FlexBox>
      <Image src={image} style={{ width: '90%'}} />
    </FlexBox>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
