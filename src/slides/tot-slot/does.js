import React from 'react';
import SpeakerNotes from '../../components/Notes';
import { Slide, Text, Notes, Heading, UnorderedList, ListItem, Appear } from 'spectacle';
import notes from './notes/does.md';


export default (
  <Slide backgroundColor="bgEvents">
    <Heading>Does</Heading>
    <UnorderedList>
      <ListItem>
        <Text>Stel een Sprintdoel vast</Text>
      </ListItem>
      <Appear>
        <ListItem>
          <Text>Backlog op orde</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Leg besluiten vast</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Beschrijf oplossingen</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Wees transparant</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Maak het duidelijk</Text>
        </ListItem>
      </Appear>
    </UnorderedList>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
