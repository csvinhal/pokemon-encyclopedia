import React, { useEffect, useState } from 'react';
import instance from '../../shared/requestsConfig';
import './PokemosList.scss';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    instance.get('pokemon/?limit=11&offset=0').then((response) => {
      const { data } = response;
      setPokemons(data.results);
    });
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              {pokemon.url}
              {pokemon.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PokemonList;
