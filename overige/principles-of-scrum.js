import React from 'react';
import { Heading, Slide, UnorderedList, ListItem,Text } from 'spectacle';

export default (
  <>
    <Slide>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      3 fundamentele principes in Scrum
      </Heading>
      <UnorderedList>
        <ListItem>Transparantie</ListItem>
        <ListItem>In(tro)spectie</ListItem>
        <ListItem>adaptation</ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading size={2} fit caps lineHeight={1} textColor="secondary">Transparantie</Heading>
      <Text>
        Elk team lid heeft toegang tot alle informatie die nodig is om het product te leveren
      </Text>
    </Slide>
  </>
);
