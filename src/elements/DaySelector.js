import React from 'react';
import styled from 'tachyons-components';

const DayContainer = styled('div')`
  ma2
  flex
`

const Day = styled('div')`
  shadow-hover
  pa2
  sans-serif f6
  ${props => props.isSelected ? 'bg-white black' : 'bg-light-gray black-20'}
`

export default ({ selectedDays, onDayChange }) => {
  const isSelected = day => selectedDays.includes(day);

  return (
    <DayContainer id="daySeletor">
      { 
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          .map(day => {
            return (
              <Day 
                key={day}
                isSelected={isSelected(day)}
                onClick={() => onDayChange(day)} >
                {day}
              </Day>
            );
          })
      }
    </DayContainer>
  );
}