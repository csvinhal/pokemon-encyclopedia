import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import { fetchAllPokemons } from '../../shared/pokemonApi';
import PokemonItem from './PokemonItem/PokemonItem';
import './PokemosList.scss';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const onLoadMore = () => {
    setOffset(offset + 12);
  };

  useEffect(() => {
    setLoading(true);
    fetchAllPokemons(12, offset).then((response) => {
      const { data } = response;
      setPokemons((p) => [...p, ...data.results]);
      setLoading(false);
    });
  }, [offset]);

  return (
    <main className="app__container page">
      <section className="pokemon-list">
        <h1>Pokédex</h1>
        <ul className="pokemon-list__cards">
          {pokemons.length
            ? pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.name} url={pokemon.url} />
              ))
            : ''}
        </ul>
        {offset ? <Loading loading={loading} /> : ''}
        {!loading && (
          <div className="pokemon-list__load-more">
            <Button priority="primary" label="Load more" onClick={onLoadMore} />
          </div>
        )}
      </section>
    </main>
  );
};

export default PokemonList;
