import PropTypes from 'prop-types';
import React from 'react';
import './PokemonTypeBadge.scss';

const PokemonTypeBadge = (props) => {
  const { pos, type } = props;
  const className = [
    'pokemon-type-badge__container',
    `pokemon-type-badge__container--${type}`,
  ];

  if (pos === 'left') {
    className.push('pokemon-type-badge__container--left');
  } else if (pos === 'right') {
    className.push('pokemon-type-badge__container--right');
  }

  return (
    <div className={className.join(' ')}>
      <span>{type}</span>
    </div>
  );
};

PokemonTypeBadge.propTypes = {
  pos: PropTypes.oneOf(['left', 'right']).isRequired,
  type: PropTypes.oneOf([
    'grass',
    'poison',
    'fire',
    'flying',
    'water',
    'bug',
    'normal',
    'fairy',
    'ground',
    'fighting',
    'electric',
    'psychic',
    'rock',
    'steel',
    'ice',
    'ghost',
    'dragon',
    'dark',
  ]).isRequired,
};

export default PokemonTypeBadge;
