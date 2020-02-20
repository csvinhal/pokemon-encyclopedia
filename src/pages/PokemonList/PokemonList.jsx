import React, { useEffect, useState } from 'react';
import instance from '../../shared/requestsConfig';
import './PokemosList.scss';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    instance.get('pokemon/?limit=11&offset=0').then((response) => {
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
            <PokemonCard key={pokemon.name} name={pokemon.name} size="small" className="cards__pokemon-card" />
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
