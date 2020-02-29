import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PokemonTypeBadge from '../../../components/PokemonTypeBadge/PokemonTypeBadge';
import { getMoveDetail } from '../../../shared/pokemonApi';
import './PokemonMove.scss';

const PokemonMove = (props) => {
  const { name, className } = props;
  const [move, setMove] = useState(null);
  const moveClassName = ['pokemon-move'];

  if (className) {
    moveClassName.push(className);
  }

  useEffect(() => {
    getMoveDetail(name).then((response) => {
      const { data } = response;
      setMove(data);
    });
  }, [name]);

  return (
    <div
      className={moveClassName.join(' ')}
      role="listitem"
      aria-label={move && move.name}
    >
      {move && (
        <PokemonTypeBadge
          key={move.name}
          pos="center"
          type={move.type.name}
          size="default"
        >
          {move.name}
        </PokemonTypeBadge>
      )}
    </div>
  );
};

PokemonMove.defaultProps = {
  className: '',
};

PokemonMove.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PokemonMove;
