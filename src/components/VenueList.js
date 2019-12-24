import React, { useState } from 'react';

import BodyText from '../elements/BodyText';
import Card from '../elements/Card';
import { Heading2, Heading3 } from '../elements/Heading';
import { SimpleList } from '../elements/List';
import VENUES from '../services/venuesService';
import VenueListControls from './venueList/VenueListControls';

const sortByValue = list => {
  return [...list].sort((a, b) => {
    var venueA = a.venue.toUpperCase(); // ignore upper and lowercase
    var venueB = b.venue.toUpperCase(); // ignore upper and lowercase
    if (venueA < venueB) {
      return -1;
    }
    if (venueA > venueB) {
      return 1;
    }
    // venues must be equal
    return 0;
  })
}

const ORDERINGS = {
  '🔼 Alphabetical': list => sortByValue(list),
  '🔽 Alphabetical': list => sortByValue(list).reverse()
}

export default () => {
  const [order, setOrder] = useState('🔼 Alphabetical');
  const [items, setItems] = useState(ORDERINGS[order](VENUES));

  const handleOrderChange = newOrder => {
    setOrder(newOrder);
    setItems(ORDERINGS[newOrder](VENUES));
  }

  return (
    <div>
      <VenueListControls orderOptions={ORDERINGS} selectedOrderOption={order} onOrderChange={handleOrderChange} />
      <SimpleList centered wrap>
        {
          items.map((venue, n) => {
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
    </div>
  )
}