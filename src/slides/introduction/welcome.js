import React from 'react';
import { Heading, FlexBox, Slide, Notes, Image } from 'spectacle';
import SpeakerNotes from '../../components/Notes';
import notes from './notes/welcome.md';

import imgLogo from '../../cl-logo.svg';
import imgIterate from './images/iteraties.png';

export default (
  <>
    <Slide backgroundColor="#FFF">
      <FlexBox
        justifyContent="center"
        top="0px"
        width={1}
        flexGrow={0}
        backgroundColor="#FFFFFF"
        height="100px"
      >
        <Image src={imgLogo} style={{ height: '60px'}} />
      </FlexBox>

      <FlexBox
        flexDirection="column"
        alignItems="center"
      >
        <Heading>Scrum</Heading>
        <Image src={imgIterate} style={{ width: '100%' }}/>
      </FlexBox>

      <Notes>
        <SpeakerNotes source={notes} />
      </Notes>
    </Slide>
  </>
);