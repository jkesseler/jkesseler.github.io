import React from 'react';
import {
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
} from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import imgProductBacklog from './images/product-backlog.png';
import imgProductBacklogEvolution from './images/product-backlog-evolution.png';
import notesProductBacklog from './notes/product-backlog.md';
import notesProductBacklogEvolution from './notes/product-backlog.md';

export default (
  <>
    <Slide backgroundColor="bgArtifacts">
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgProductBacklog} style={{ width: '55%'}} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notesProductBacklog} />
      </Notes>
    </Slide>
    <Slide backgroundColor="bgArtifacts">
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgProductBacklogEvolution} style={{ width: '70%'}} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notesProductBacklogEvolution} />
      </Notes>
    </Slide>

  </>
);
