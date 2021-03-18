import React from 'react';
import {
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
} from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import imgIncrement from './images/increment.png';
import notes from './notes/increment.md';


export default (
  <Slide backgroundColor="bgArtifacts">
    <Heading>Increment</Heading>
    <FlexBox
      flexDirection="column"
      alignItems="center"
      flexGrow={0}
    >
      <Image src={imgIncrement} style={{width: '40%'}} />
    </FlexBox>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
