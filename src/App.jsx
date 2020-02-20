import React from 'react';
import './App.scss';
import Header from './header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__container" />
    </div>
  );
}

export default App;
