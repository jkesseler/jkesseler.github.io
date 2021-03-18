import React from 'react';
import { Heading, FlexBox, Slide, Notes, Image, Text } from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notes from './notes/scrum-team.md';
import notesHierarchy from './notes/scrum-team-hierachy.md';
import notesResponsibilities from './notes/scrum-team-responsibilities.md';

import imgTeam from './images/scrum-team.png';
import imgScrumTeamRight from './images/scrum-team-right.png';
import imgScrumWrong from './images/scrum-team-wrong.png';

export default (
  <React.Fragment>

    <Slide backgroundColor="bgRoles">
      <Heading>Het Scrum Team</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgTeam} />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>

    <Slide backgroundColor="bgRoles">
      <Heading>Team</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgScrumWrong} />
        <Text>Niet zo</Text>
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notesHierarchy} />
      </Notes>
    </Slide>

    <Slide backgroundColor="bgRoles">
      <Heading>Team</Heading>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        flexGrow={0}
      >
        <Image src={imgScrumTeamRight} width="50%" />
      </FlexBox>
      <Notes>
        <SpeakerNotes source={notesResponsibilities} />
      </Notes>
    </Slide>

  </React.Fragment>
);
