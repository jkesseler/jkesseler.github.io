import React from 'react';
import {
  Appear,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import imgDev from './images/developers.png';
import notes from './notes/developers.md';

export default (
  <>
    <Slide backgroundColor="bgRoles">
      <Heading>Developers</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgDev} style={{ width: '90%' }} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>
    <Slide backgroundColor="bgRoles">
      <Heading>Developers</Heading>
      <UnorderedList>
        <ListItem>
          <Text>Bepalen zelf de inhoud van de Sprint, samen met de Product Owner</Text>
        </ListItem>
        <Appear>
          <ListItem>
            <Text>De Product Owner bepaald "Wat", de Developers bepalen "Hoe"</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Zijn verantwoordelijk voor het Increment</Text>
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>
  </>
);
