import React, { useState, useEffect } from 'react';
import lunr from 'lunr';

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

const LUNR_INDEX = lunr(function() {
  this.ref('venue');
  this.field('venue');
  this.field('title');
  this.field('detail');

  VENUES.forEach(function(venue) {
    this.add(venue)
  }, this)
});

export default () => {
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState('🔼 Alphabetical');
  const [items, setItems] = useState(VENUES);

  useEffect(() => {
    let newItems;

    if (filter !== '') {
      let results = LUNR_INDEX.search(filter+'*');
      newItems = VENUES.filter(venue => results.map(res => res.ref).includes(venue.venue));
    } else {
      newItems = VENUES;
    }
    newItems = ORDERINGS[order](newItems);
    setItems(newItems);
  }, [filter, order])

  return (
    <div>
      <BodyText centered>{items.length} sumptuous {items.length > 1 ? 'offers' : 'offer' } right now!</BodyText>
      <VenueListControls 
        orderOptions={ORDERINGS} 
        selectedOrderOption={order} 
        onOrderChange={setOrder}
        onFilterChange={setFilter} />
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
