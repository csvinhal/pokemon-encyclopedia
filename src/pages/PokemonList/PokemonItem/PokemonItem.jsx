import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PokemonCard from '../../../components/PokemonCard/PokemonCard';
import axios from '../../../shared/requestsConfig';
import './PokemonItem.scss';

const PokemonItem = (props) => {
  const { url } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      const { data } = response;
      setPokemon(data);
    });
  }, [url]);

  return (
    <div className="pokemon-item">
      {pokemon && (
        <PokemonCard
          size="small"
          pokemon={pokemon}
          className="item__pokemon-card"
        />
      )}
    </div>
  );
};

PokemonItem.propTypes = {
  url: PropTypes.string.isRequired,
};
export default PokemonItem;
