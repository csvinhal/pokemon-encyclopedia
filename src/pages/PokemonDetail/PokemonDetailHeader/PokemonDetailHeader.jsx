import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import nextIcon from '../../../assets/icon_next.png';
import previousIcon from '../../../assets/icon_previous.png';
import { getPokemon } from '../../../shared/pokemonApi';
import { getFormattedId } from '../../../shared/pokemonFunctions';
import './PokemonDetailHeader.scss';

const PokemonDetailHeader = (props) => {
  const { id } = props;
  const [lastPokemon, setLastPokemon] = useState(null);
  const [nextPokemon, setNextPokemon] = useState(null);

  const getLastId = (currentId) => {
    if (currentId === 1) {
      return 720;
    }
    return currentId - 1;
  };

  const getNextId = (currentId) => {
    if (currentId === 720) {
      return 1;
    }
    return currentId + 1;
  };

  useEffect(() => {
    const reqOne = getPokemon(getLastId(Number(id)));
    const reqTwo = getPokemon(getNextId(Number(id)));

    Axios.all([reqOne, reqTwo]).then((response) => {
      const lastData = response[0].data;
      const nextData = response[1].data;

      setLastPokemon(lastData);
      setNextPokemon(nextData);
    });
  }, [id]);

  return (
    <section className="pokemon-detail-header">
      <Link
        to={`/${lastPokemon && lastPokemon.id}`}
        className="pokemon-detail-header__left-side"
      >
        <img src={previousIcon} alt="Previous icon" />
        <h2 className="left-side__name">
          <span className="name__id">
            {'#'}
            {lastPokemon && getFormattedId(lastPokemon.id)}
          </span>
          <span className="name__name">{lastPokemon && lastPokemon.name}</span>
        </h2>
      </Link>
      <Link
        to={`/${nextPokemon && nextPokemon.id}`}
        className="pokemon-detail-header__right-side"
      >
        <h2 className="right-side__name">
          <span className="name__name">{nextPokemon && nextPokemon.name}</span>
          <span className="name__id">
            {'#'}
            {nextPokemon && getFormattedId(nextPokemon.id)}
          </span>
        </h2>
        <img src={nextIcon} alt="Next icon" />
      </Link>
    </section>
  );
};

PokemonDetailHeader.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PokemonDetailHeader;
