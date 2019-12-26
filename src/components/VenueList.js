import React, { useState, useEffect } from 'react';
import lunr from 'lunr';

import BodyText from '../elements/BodyText';
import { SimpleList } from '../elements/List';
import VENUES from '../services/venuesService';
import VenueListControls from './venueList/VenueListControls';
import VenueListItem from './venueList/VenueListItem';

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
  const [days, setDays] = useState(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);

  function handleDayChange(day) {
    const newDays = addOrRemove(days, day);
    setDays(newDays);
  }

  useEffect(() => {
    let newItems;
    const inSelectedDays = day => days.includes(day);

    if (filter !== '') {
      let results = LUNR_INDEX.search(filter+'*');
      newItems = VENUES.filter(venue => results.map(res => res.ref).includes(venue.venue));
    } else {
      newItems = VENUES;
    }
    newItems = newItems.filter(venue => venue.days.some(inSelectedDays));
    newItems = ORDERINGS[order](newItems);
    setItems(newItems);
  }, [filter, days, order])

  return (
    <div>
      <BodyText centered>{items.length} sumptuous {items.length > 1 ? 'offers' : 'offer' } right now!</BodyText>
      <VenueListControls 
        orderOptions={ORDERINGS} 
        selectedOrderOption={order} 
        onOrderChange={setOrder}
        onFilterChange={setFilter}
        selectedDays={days}
        onDayChange={handleDayChange} />
      <SimpleList centered wrap>
        { items.map((venue, n) => <VenueListItem key={n} venue={venue} />) }
      </SimpleList>
    </div>
  )
}

function addOrRemove(arr, item) {
  return arr.includes(item) ? arr.filter(i => i !== item) : [ ...arr, item ];
}