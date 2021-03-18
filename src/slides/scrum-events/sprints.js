import React from 'react';
import { FlexBox, Heading, Slide, Image, Appear, Notes, UnorderedList, ListItem, Text } from 'spectacle';
import SpeakerNotes from '../../components/Notes';

import introNotes from './notes/sprints-intro.md';
import notes from './notes/sprints.md';

import imgSprint1 from './images/sprint.png';

export default (
  <>
    <Slide backgroundColor="bgEvents">
      <Heading>Sprints</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgSprint1} style={{ width: '90%' }} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={introNotes} />
      </Notes>
    </Slide>

    <Slide backgroundColor="bgEvents">
      <Heading>Sprints</Heading>
      <UnorderedList>
        <ListItem>
          <Text>Alles gebeurd binnen Sprints</Text>
        </ListItem>
        <Appear>
          <ListItem>
            <Text>Geeft ritme aan gebeurtenissen en werkzaamheden</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Vaste lengte waarborgd consitentie en voorspelbaarheid</Text>
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>

    {/* <Slide backgroundColor="bgEvents">
      <Heading>Sprints</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imagSprint2} style={{ width: '65%' }} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notes2} />
      </Notes>
    </Slide> */}
  </>
);