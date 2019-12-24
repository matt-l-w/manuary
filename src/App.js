import React from 'react';
import styled from 'tachyons-components';

import Navbar from './components/Navbar';
import VenueList from './components/VenueList';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';

const AppContainer = styled('div')`
  w-100 flex flex-column
`

const ContentContainer = styled('main')`
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
        <HomeHero />
        <VenueList />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
