import React from 'react';

import BodyText from '../elements/BodyText';
import Card from '../elements/Card';
import { Heading2, Heading3 } from '../elements/Heading';
import { SimpleList } from '../elements/List';
import VENUES from '../services/venuesService';

export default () => {  
  return (
    <SimpleList centered wrap>
      {
        VENUES.map((venue, n) => {
          return (
            <Card key={n} size={5}>
              <Heading2>{venue.venue}</Heading2>
              <Heading3>{venue.title}</Heading3>
              <BodyText>{venue.detail}</BodyText>
            </Card>
          );
        })
      }
    </SimpleList>
  )
}