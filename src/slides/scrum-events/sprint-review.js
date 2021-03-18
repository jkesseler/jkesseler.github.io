import React from 'react';
import { Heading, Slide, Appear, Notes, UnorderedList, ListItem, Text } from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notes from './notes/sprint-review.md';


export default (
  <Slide backgroundColor="bgEvents">
    <Heading>Sprint Review</Heading>
    <UnorderedList>
      <ListItem>
        <Text>Increment laten zien</Text>
      </ListItem>
      <Appear>
        <ListItem>
          <Text>Feedback verzamelen</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Eventueel backlog bijwerken op basis van de feedback</Text>
        </ListItem>
      </Appear>
    </UnorderedList>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
