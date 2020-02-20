import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { fetchAllPokemons } from '../../shared/pokemonApi';
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
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              size="small"
              className="cards__pokemon-card"
            />
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
