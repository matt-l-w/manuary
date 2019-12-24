import styled from 'tachyons-components';

export const SimpleList = styled('ul')`
  list
  mw-100
  pl0
  ${props => props.centered ? 'center' : undefined }
  ${props => props.wrap ? 'flex flex-wrap' : undefined }
  ${props => props.wrap && props.centered ? 'justify-center' : undefined }
`