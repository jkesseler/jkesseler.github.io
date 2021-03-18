import React from 'react';
import {
  Appear,
  Heading,
  ListItem,
  Notes,
  Slide,
  UnorderedList,
  Text,
} from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notes from './notes/donts.md';


export default (
  <Slide backgroundColor="bgEvents">
    <Heading>Dont's</Heading>
    <UnorderedList>
      <ListItem>
        <Text>Implementatie details in een User Story</Text>
      </ListItem>
      <Appear>
        <ListItem>
          <Text>Te veel stories in een sprint</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Geen aandacht voor kwaliteit</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Onduidelijke stories in sprint</Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text>Hoog risico werk</Text>
        </ListItem>
      </Appear>
    </UnorderedList>
    <Notes>
      <SpeakerNotes source={notes} />
    </Notes>
  </Slide>
);
