import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PokemonCard from '../../../components/PokemonCard/PokemonCard';
import axios from '../../../shared/requestsConfig';
import './PokemonItem.scss';

const PokemonItem = (props) => {
  const { url } = props;
  const [pokemon, setPokemon] = useState(null);
  const history = useHistory(useHistory);

  useEffect(() => {
    axios.get(url).then((response) => {
      const { data } = response;
      setPokemon(data);
    });
  }, [url]);

  const navigateToDetail = () => {
    history.push(`/${pokemon.id}`);
  };

  return (
    <li className="pokemon-item">
      <Link to={`/${pokemon && pokemon.id}`}>
        {pokemon && (
          <PokemonCard
            size="small"
            pokemon={pokemon}
            className="item__pokemon-card"
            onClick={navigateToDetail}
          />
        )}
      </Link>
    </li>
  );
};

PokemonItem.propTypes = {
  url: PropTypes.string.isRequired,
};
export default PokemonItem;
