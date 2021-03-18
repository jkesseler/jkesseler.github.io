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
import imgSM from './images/scrum-master.png';
import notes from './notes/scrum-master.md';


export default (
  <>
    <Slide backgroundColor="bgRoles">
      <Heading>Scrum Master</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgSM} style={{ width: '90%' }} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>
    <Slide backgroundColor="bgRoles">
      <Heading>Scrum Master</Heading>
      <UnorderedList>
        <ListItem>
          <Text>Doceert in Scrum</Text>
        </ListItem>
        <Appear>
          <ListItem>
            <Text>Faciliteerd Scrum Events</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Coached de mensen</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Ondersteund het team</Text>
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>
  </>
);
