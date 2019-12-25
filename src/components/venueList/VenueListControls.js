import React from 'react';
import styled from 'tachyons-components';
import debounce from 'debounce';

import Dropdown from '../../elements/Dropdown';
import Input from '../../elements/Input';
import Label from '../../elements/Label';

const ControlsContainer = styled('form')`
  ma0
  mw-100
  pv2 ph2 ph4-m
  flex-ns
  justify-center-ns
`

const ControlPair = styled('div')`
  mh3-ns
`

export default ({ orderOptions, selectedOrderOption, onOrderChange, onFilterChange }) => {
  return (
    <ControlsContainer onSubmit={(e) => e.preventDefault()}>
      <ControlPair>
        <Label htmlFor="order" pad={2}>Order By:</Label>
        <Dropdown id="order" value={selectedOrderOption} onChange={(e) => onOrderChange(e.target.value)}>
          {Object.keys(orderOptions).map(key => {
          return <option key={key} text={key} value={key}>{key}</option>
          })}
        </Dropdown>
      </ControlPair>
      <ControlPair>
        <Label htmlFor="search" pad={2}>Search:</Label>
        <Input onChange={(e) => debounce(onFilterChange(e.target.value), 200)}/>
      </ControlPair>
    </ControlsContainer>
  )
}