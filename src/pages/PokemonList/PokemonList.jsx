import React, { useEffect, useState } from 'react';
import { fetchAllPokemons } from '../../shared/pokemonApi';
import PokemonItem from './PokemonItem/PokemonItem';
import './PokemosList.scss';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchAllPokemons().then((response) => {
      const { data } = response;
      setPokemons(data.results);
    });
  }, []);

  return (
    <div className="pokemon-list">
      <h1>Pokédex</h1>
      <div className="pokemon-list__cards">
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.name} url={pokemon.url} />
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
