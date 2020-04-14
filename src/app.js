import React from 'react';
import './sass/styles.scss';
import Header from './shared/components/Header';
import SearchContainer from './shared/containers/SearchContainer';

function App() {
  return (
    <div className="container">
      <Header />
      <SearchContainer />
    </div>
  );
}

export default App;
