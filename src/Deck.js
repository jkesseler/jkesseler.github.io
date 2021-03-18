import React from 'react';
import { Deck } from 'spectacle';
import template from './template';
import * as introduction from './slides/introduction';
import * as scrumRoles from './slides/scrum-roles';
import * as scrumEvents from './slides/scrum-events';
import * as scrumArtefacts from './slides/scrum-artifacts';
import * as totSlot from './slides/tot-slot';

/*
  bgIntroduction: '#0198CD',
  bgArtifacts: '#5FC9C3',
  bgEvents: '#FDC600',
  bgRoles: '#8CC63F',
*/

const theme = {
  backdropStyle: {
    background: 'linear-gradient(0deg, rgba(35,99,192,1) 0%, rgba(27,77,149,1) 100%)',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    position: 'fixed'
  },
  colors: {
    primary: '#2363C0',
    secondary: '#1B4D95',
    tertiary: '#DCBA00',
    bgIntroduction: '#FFFFFF',
    bgArtifacts: '#FFFFFF',
    bgEvents: '#FFFFFF',
    bgRoles: '#FFFFFF',
  },
  fonts: {
    header: 'Lora, serif',
    text: 'Roboto, sans-serif'
  },
  fontSizes: {
    h1: '48px',
    text: '32px',
  },
};

function App() {
  return (
    <Deck template={template} theme={theme} backdropStyle={theme.backdropStyle} suppressBackdropFallback>
      {Object.values(introduction).map((slide, i) =>(<React.Fragment key={`1${i}`}>{slide}</React.Fragment>))}
      {Object.values(scrumRoles).map((slide, i) =>(<React.Fragment key={`2${i}`}>{slide}</React.Fragment>))}
      {Object.values(scrumArtefacts).map((slide, i) =>(<React.Fragment key={`4${i}`}>{slide}</React.Fragment>))}
      {Object.values(scrumEvents).map((slide, i) =>(<React.Fragment key={`3${i}`}>{slide}</React.Fragment>))}
      {Object.values(totSlot).map((slide, i) =>(<React.Fragment key={`3${i}`}>{slide}</React.Fragment>))}
    </Deck>);
}


export default App;