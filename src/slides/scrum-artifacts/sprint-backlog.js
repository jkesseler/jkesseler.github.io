import React from 'react';
import {
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
} from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import imgSprintBacklog from './images/sprint-backlog.png';
import notes from './notes/sprint-backlog.md';


export default (
  <Slide backgroundColor="bgArtifacts">
    <FlexBox
      flexDirection="column"
      alignItems="center"
      flexGrow={0}
    >
      <Image src={imgSprintBacklog} style={{width: '65%'}} />
    </FlexBox>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
