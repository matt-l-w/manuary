import styled from 'tachyons-components';

export default styled('p')`
  measure
  sans-serif
  ${props => props.centered ? 'tc center': undefined }
`