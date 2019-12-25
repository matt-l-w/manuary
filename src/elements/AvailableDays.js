import React from 'react';
import styled from 'tachyons-components';

import Label from './Label';

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const AvailableDaysContainer = styled('div')`
  mv3
  mw-100
`

const DaysContainer = styled('ul')`
  list
  pa0
  flex
`

export default ({ days }) => {
  return (
    <AvailableDaysContainer>
      <Label pad={0}>Available Days:</Label>
      <DaysContainer>
        { DAYS.map(day => <DayElement key={day} day={day} availableDays={days} />) }
      </DaysContainer>
    </AvailableDaysContainer>
  )
}


const Day = styled('li')`
  pr2 pv2
  sans-serif
  ${props => props.isAvailable ? 'black' : 'light-gray' }
`

function DayElement({ day, availableDays }) {
  const isAvailable = availableDays.includes(day);

  return (
    <Day isAvailable={isAvailable}>
      {day}
      { isAvailable ? undefined : <p hidden>Not available</p> }
    </Day>
  )
}