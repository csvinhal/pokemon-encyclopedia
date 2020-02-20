import React from 'react';
import './App.scss';
import Header from './header/Header';
import PokemonList from './pages/PokemonList/PokemonList';

const App = () => (
  <div className="app">
    <Header />
    <main className="app__container">
      <PokemonList />
    </main>
  </div>
);

export default App;
