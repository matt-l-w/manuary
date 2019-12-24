import styled from 'tachyons-components';

export default styled('small')`
  measure-wide
  f7 sans-serif
  ${props => props.centered ? 'tc center': undefined }
`