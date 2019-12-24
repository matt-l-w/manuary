import styled from 'tachyons-components';

export default styled('div')`
  ${props => `w${props.size}`}
  ma3 ma4-ns
  bw1 ba br4 shadow-2
  pa4
  flex flex-column
`