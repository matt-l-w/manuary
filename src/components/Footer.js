import React from 'react';
import styled from 'tachyons-components';

import SmallText from '../elements/SmallText';

const Footer = styled('footer')`
  ma0 
  mw-100 
  bw1 bt
  ph3 pv4
  gray
`

export default () => {

  return (
    <Footer>
      <SmallText centered>
        This information was put together using information from
        the lovely folks at Manchester's Finest. 
        Their <a href="http://www.manchestersfinest.com/articles/manchesters-best-january-dining-deals-2020/">original article</a> was
        the basis for this compilation. Thanks all!
      </SmallText>
    </Footer>
  );
}