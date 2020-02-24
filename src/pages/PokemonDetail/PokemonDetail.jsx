import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { getPokemon } from '../../shared/pokemonApi';
import './PokemonDetail.scss';

const PokemonDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [pokemon, setPokemon] = useState(null);
  
  function handleExploreMoreClick() {
    history.push('/');
  }

  useEffect(() => {
    getPokemon(id).then((response) => {
      const { data } = response;
      setPokemon(data);
    });
  }, [id]);

  return (
    <section className="pokemon-detail">
      <h1 className="pokemon-detail__pokemon-name">
        <span className="pokemon-name__id">#001</span>
        Bulbasaur
      </h1>

      <div>
        {pokemon && (
          <PokemonCard
            size="large"
            pokemon={pokemon}
            className="item__pokemon-card"
          />
        )}
      </div>

      <div className="pokemon-detail__explore-more">
        <Button
          priority="secondary"
          label="Explore more pokémon"
          onClick={handleExploreMoreClick}
        />
      </div>
    </section>
  );
};

export default PokemonDetail;
