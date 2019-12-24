import React from 'react';
import styled from 'tachyons-components';

import Navbar from './components/Navbar';

const AppContainer = styled('div')`
  w-100 flex flex-column
`

function App() {
  return (
    <AppContainer id="App">
      <Navbar />
    </AppContainer>
  );
}

export default App;
