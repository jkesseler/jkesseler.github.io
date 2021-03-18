import React from 'react';
import {
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
} from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import image from './images/scrum-artifacts.png';
import notes from './notes/artifacs.md';


export default (
  <Slide backgroundColor="bgArtifacts">
    <Heading>Artifacts</Heading>
    <FlexBox
      flexDirection="column"
      alignItems="center"
      flexGrow={0}
    >
      <Image src={image} style={{ width: '70%' }} />
    </FlexBox>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
