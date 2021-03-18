import React from 'react';
import { Heading, Slide, Appear, Notes, UnorderedList, ListItem, Text } from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notes from './notes/sprint-retrospective.md';


export default (
  <Slide backgroundColor="bgEvents">
    <Heading>Sprint Retrospective</Heading>
    <UnorderedList>
      <ListItem>
        <Text>Inspecteren</Text>
      </ListItem>
      <Appear>
        <ListItem>
          <Text>verbeteringen identificeren</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>verbeteringen implementeren</Text>
        </ListItem>
      </Appear>
    </UnorderedList>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
