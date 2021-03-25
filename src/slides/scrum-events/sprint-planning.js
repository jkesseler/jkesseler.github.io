import React from 'react';
import { FlexBox, Heading, Slide, Image, Notes } from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notesRefinement from './notes/backlog-refinement.md';
import notesPlanning from './notes/sprint-planning.md';

import imgRefinement from './images/backlog-refinement.png';
import imgPlanning from './images/sprint-planning.png';


export default (
  <>
    <Slide backgroundColor="bgEvents">
      <Heading>Backlog refinement</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgRefinement} style={{ width: '80%' }} />

      </FlexBox>
      <Notes>
        <SpeakerNotes source={notesRefinement} />
      </Notes>
    </Slide>
    <Slide backgroundColor="bgEvents">
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgPlanning} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notesPlanning} />
      </Notes>
    </Slide>
  </>
);
