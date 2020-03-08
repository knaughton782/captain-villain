import React from 'react';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import ContentContainer from './components/layout/ContentContainer';

function App() {
  return (
    <div>
      <Header />
      <ContentContainer />
      <BottomNav />
    </div>
  );
}

export default App;
