import React from 'react';
import { Heading, FlexBox, Slide, Notes, Image } from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notes from './notes/pillars-of-scrum.md';

import image from './images/pillars-of-scrum.png';

export default (
  <Slide backgroundColor="bgIntroduction">
    <Heading>Pilaren van Scrum</Heading>
    <FlexBox>
      <Image src={image} style={{ width: '90%'}} />
    </FlexBox>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
