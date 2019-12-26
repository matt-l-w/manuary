import React from 'react';
import styled from 'tachyons-components';

import Card from '../../elements/Card';
import { Heading2, Heading3 } from '../../elements/Heading';
import AvailableDays from '../../elements/AvailableDays';
import BodyText from '../../elements/BodyText';
import ButtonPrimary from '../../elements/Button';

const LinkContainer = styled('div')`
  flex flex-wrap
  justify-center
`

const FlexLink = styled('a')`
  di link
`

export default ({ venue }) => {
  return (
    <Card size={5}>
      <Heading2>{venue.venue}</Heading2>
      <Heading3>{venue.title}</Heading3>
      <AvailableDays days={venue.days} />
      <BodyText>{venue.detail}</BodyText>
      <LinkContainer style={{"justify-self": "end"}}>
      {
        venue.links.map(link => {
          return (
            <FlexLink key={link.href} href={link.href} target="blank">
              <ButtonPrimary>{link.text}</ButtonPrimary>
            </FlexLink>
          )
        })
      }
      </LinkContainer>
    </Card>
  )
}