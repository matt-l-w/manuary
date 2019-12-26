import styled from 'tachyons-components';

export default styled('p')`
  measure
  ${props => props.grow ? 'flex-grow-1': undefined }
  sans-serif
  ${props => props.centered ? 'tc center': undefined }
  lh-copy
`