import React from 'react';
import { Progress, FlexBox, Box, FullScreen, Image } from 'spectacle';

import imgLogo from './cl-logo.svg';

const Template = ({ slideNumber, numberOfSlides }) => (

  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom="0px"
    width={1}
    flexGrow={0}
    height="50px"
  >
    <Box paddingLeft="0.5em">
      <Image src={imgLogo} style={{ height: '30px', opacity: '0.5' }} />
    </Box>
    <Box>
      <Progress color="#1B4D95" />
    </Box>
    <Box paddingRight="0.5em">
      <FullScreen color="#1B4D95" />
    </Box>
  </FlexBox>
);

export default Template;