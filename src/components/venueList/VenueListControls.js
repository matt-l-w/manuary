import React from 'react';
import styled from 'tachyons-components';
import Dropdown from '../../elements/Dropdown';
import Label from '../../elements/Label';

const ControlsContainer = styled('form')`
  ma0
  mw-100
  pv2 ph2 ph4-m
`

const ControlPair = styled('div')`
`

export default ({ orderOptions, selectedOrderOption, onOrderChange }) => {
  return (
    <ControlsContainer>
      <ControlPair>
        <Label htmlFor="order">Order By:</Label>
        <Dropdown id="order" value={selectedOrderOption} onChange={(e) => onOrderChange(e.target.value)}>
          {Object.keys(orderOptions).map(key => {
          return <option key={key} text={key} value={key}>{key}</option>
          })}
        </Dropdown>
      </ControlPair>
    </ControlsContainer>
  )
}