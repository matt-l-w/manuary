import React from 'react';
import styled from 'tachyons-components';

import Navbar from './components/Navbar';
import VenueList from './components/VenueList';

const AppContainer = styled('div')`
  w-100 flex flex-column
`

const ContentContainer = styled('div')`
  mw-100
  flex flex-column
  pa3
  overflow-scroll
`

function App() {
  return (
    <AppContainer id="App">
      <Navbar />
      <ContentContainer>
        <VenueList />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
