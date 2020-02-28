import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
          <Route path="/:id" component={PokemonDetail} />
          <Route path="/" component={PokemonList} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
