import styled from 'tachyons-components';

export default styled('div')`
  ${props => `w${props.size}`}
  ma2
  flex flex-column
`