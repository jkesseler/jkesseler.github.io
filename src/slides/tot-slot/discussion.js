import React from 'react';
import {
  Appear,
  FlexBox,
  Heading,
  ListItem,
  Notes,
  Slide,
  UnorderedList,
} from 'spectacle';
import SpeakerNotes from '../../components/Notes';

import notes from './notes/discussion.md';

export default (
  <>
    <Slide backgroundColor="bgArtifacts">
      <Heading>Discussie punten</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Twee Product Owners
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
              Onvoorzien werk
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>
    <Slide backgroundColor="bgArtifacts">
      <FlexBox height="100vh">
        <Heading>Vragen?</Heading>
      </FlexBox>
    </Slide>
  </>
);
