import styled from 'tachyons-components';

export default styled('label')`
  db
  ${props => props.pad ? `ph${props.pad}` : undefined }
  f6 b tracked-tight sans-serif ttu
`