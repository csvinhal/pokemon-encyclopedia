import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PokemonTypeBadge from '../../../components/PokemonTypeBadge/PokemonTypeBadge';
import { getMoveDetail } from '../../../shared/pokemonApi';
import './PokemonMove.scss';
import Loading from '../../../components/Loading/Loading';

const PokemonMove = (props) => {
  const { name, className } = props;
  const [move, setMove] = useState(null);
  const [loading, setLoading] = useState(false);
  const moveClassName = ['pokemon-move'];

  if (className) {
    moveClassName.push(className);
  }

  useEffect(() => {
    setLoading(true);
    getMoveDetail(name).then((response) => {
      const { data } = response;
      setMove(data);
      setLoading(false);
    });
  }, [name]);

  return (
    <div
      className={moveClassName.join(' ')}
      role="listitem"
      aria-label={move && move.name}
    >
      <Loading loading={loading}>
        {move ? (
          <PokemonTypeBadge
            key={move.name}
            pos="center"
            type={move.type.name}
            size="default"
          >
            {move.name}
          </PokemonTypeBadge>
        ) : (
          ''
        )}
      </Loading>
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
