import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import Header from './header/Header';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import PokemonList from './pages/PokemonList/PokemonList';

const App = () => (
  <div className="app">
    <Header />
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route exact path="/" component={PokemonList} />
              <Route path="/:id" component={PokemonDetail} />
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </div>
);
export default App;
