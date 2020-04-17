import React from 'react';
import './sass/styles.scss';
import Header from 'components/Header';
import SearchContainer from 'containers/SearchContainer';

function App() {
  return (
    <div className="container">
      <Header />
      <SearchContainer />
    </div>
  );
}

export default App;
