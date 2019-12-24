import React from 'react';

import styled from 'tachyons-components';
import { Heading1 } from '../elements/Heading';

const NavContainer = styled('div')`
  ma0 pa3 bw1 bb
`

export default () => {
  return (
    <NavContainer>
      <Heading1>Manuary</Heading1>
    </NavContainer>
  )
}