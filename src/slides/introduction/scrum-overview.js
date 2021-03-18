import React from 'react';
import SpeakerNotes from '../../components/Notes';
import { FlexBox, Slide, Notes, Image } from 'spectacle';
import notes from './notes/scrum-overview.md';

import image from './images/scrum.png';

export default (
  <Slide backgroundColor="bgIntroduction">
    <FlexBox>
      <Image src={image} style={{ width: '90%'}} />
    </FlexBox>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
