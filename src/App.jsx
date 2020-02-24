import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './header/Header';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <main className="app__container">
        <Switch>
          <Route path="/:id" component={PokemonDetail} exact />
          <Route path="/" component={PokemonList} exact />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
