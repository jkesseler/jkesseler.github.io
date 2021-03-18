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
import imgPO from './images/product-owner.png';
import notes from './notes/product-owner.md';

export default (
  <React.Fragment>
    <Slide backgroundColor="bgRoles">
      <Heading>Product Owner</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgPO} style={{ width: '90%' }} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>


    <Slide backgroundColor="bgRoles">
      <Heading>Product Owner</Heading>
      <UnorderedList>
        <ListItem>
          <Text>Eigenaar van het Product (de website)</Text>
        </ListItem>
        <Appear>
          <ListItem>
            <Text>Zorgt voor een duidelijke Product Visie</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Beheert de Product Backlog en monitort voortgang</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Vertegenwoordigd de organisatie (klant)</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Werkt samen met de Developers en Scrum Master</Text>
          </ListItem>
        </Appear>

      </UnorderedList>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>
  </React.Fragment>
);
