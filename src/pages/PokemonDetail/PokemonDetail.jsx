import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { getPokemon, getPokemonSpecie } from '../../shared/pokemonApi';
import './PokemonDetail.scss';
import PokemonMove from './PokemonMove/PokemonMove';

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
                  specie.genera
                    .find((genera) => genera.language.name === 'en')
                    .genus.replace(' Pokémon', '')}
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
                  pokemon.abilities.find((ability) => ability.slot === 1)
                    .ability.name}
              </p>
            </div>
            <div className="characteristics__basic-info">
              <h3 className="basic-info__title">Gender</h3>
              <p className="basic-info__value">F / M</p>
            </div>
          </div>
          <div className="detail__status">
            <h3>Base stats</h3>

            <div className="status__stats">
              {pokemon &&
                pokemon.stats.reverse().map((stats) => {
                  // eslint-disable-next-line camelcase
                  const { base_stat, stat } = stats;

                  // eslint-disable-next-line camelcase
                  const barSize = Math.round((base_stat * 116) / 100);
                  return (
                    <div className="stats__grouping" key={stat.name}>
                      <div className="stats__bar">
                        <div
                          className={`bar__filled bar__filled--${barSize}`}
                        />
                      </div>
                      <span>{stat.name}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <section className="pokemon-detail__moves">
        <h2>Moves</h2>
        <div className="moves__container" role="list">
          {pokemon &&
            pokemon.moves.map((item) => (
              <PokemonMove
                key={item.move.name}
                className="container__move-detail"
                name={item.move.name}
              />
            ))}
        </div>
      </section>

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
