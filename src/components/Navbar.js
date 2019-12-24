import React from 'react';

import styled from 'tachyons-components';
import { Heading1 } from '../elements/Heading';

const NavContainer = styled('header')`
  ma0 
  mw-100 
  bw1 bb
  pa3
`

export default () => {
  return (
    <NavContainer>
      <Heading1>Manuary</Heading1>
    </NavContainer>
  )
}