import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { getPokemon, getPokemonSpecie } from '../../shared/pokemonApi';
import './PokemonDetail.scss';

const PokemonDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [pokemon, setPokemon] = useState(null);
  const [specie, setSpecie] = useState(null);

  function handleExploreMoreClick() {
    history.push('/');
  }

  useEffect(() => {
    getPokemon(id).then((response) => {
      const { data } = response;
      setPokemon(data);
    });

    getPokemonSpecie(id).then((response) => {
      const { data } = response;
      setSpecie(data);
    });
  }, [id]);

  return (
    <section className="pokemon-detail">
      <h1 className="pokemon-detail__pokemon-name">
        <span className="pokemon-name__id">#001</span>
        Bulbasaur
      </h1>

      <div className="pokemon-detail__detail">
        <div className="detail__general">
          {pokemon && (
            <PokemonCard
              size="large"
              pokemon={pokemon}
              className="general__pokemon-card"
            />
          )}

          <p className="general__specie">
            {specie &&
              specie.flavor_text_entries.find(
                (text) => text.language.name === 'en'
              ).flavor_text}
          </p>
        </div>
        <div className="detail__complement">
          <div className="detail__characteristics">
            <div className="characteristics__basic-info">
              <h3 className="basic-info__title">Height</h3>
              <p className="basic-info__value">
                {pokemon && pokemon.height / 10}
                {'m'}
              </p>
            </div>
            <div className="characteristics__basic-info">
              <h3 className="basic-info__title">Category</h3>
              <p className="basic-info__value">
                {specie &&
                  specie.genera.find((genera) => genera.language.name === 'en')
                    .genus}
              </p>
            </div>
            <div className="characteristics__basic-info">
              <h3 className="basic-info__title">Weight</h3>
              <p className="basic-info__value">
                {pokemon && pokemon.weight / 10}
                {'kg'}
              </p>
            </div>
            <div className="characteristics__basic-info">
              <h3 className="basic-info__title">Abilities</h3>
              <p className="basic-info__value basic-info__value--capitalize">
                {pokemon &&
                  pokemon.abilities.find((ability) => ability.slot === 1).ability.name}
              </p>
            </div>
            <div className="characteristics__basic-info">
              <h3 className="basic-info__title">Gender</h3>
              <p className="basic-info__value">F / M</p>
            </div>
          </div>
          <div className="detail__status">
            <h3>Base stats</h3>
          </div>
        </div>
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
