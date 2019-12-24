import React from 'react';
import styled from 'tachyons-components';
import { Heading2 } from '../elements/Heading';
import TitleText from '../elements/TitleText';

const HeroContainer = styled('section')`
  ma2 ma4-m mb4
  mw-100
  bw1 bb
  pv6
  center
  tc-ns
`

export default () => {
  return (
    <HeroContainer>
      <Heading2>January sucks.</Heading2>
      <TitleText>
        Luckily, the restauranteurs of Manchester know this and they've got your back.
        <br /><br />Scroll down to find all of the best food deals that Manchester has to offer
        throughout january.
      </TitleText>
    </HeroContainer>
  )
}