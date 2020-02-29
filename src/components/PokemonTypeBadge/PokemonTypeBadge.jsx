import PropTypes from 'prop-types';
import React from 'react';
import './PokemonTypeBadge.scss';

const PokemonTypeBadge = (props) => {
  const { pos, type, size, children } = props;
  const className = [
    'pokemon-type-badge__container',
    `pokemon-type-badge__container--${type}`,
  ];

  if (size === 'small') {
    className.push('pokemon-type-badge__container--small');
  } else if (size === 'large') {
    className.push('pokemon-type-badge__container--large');
  } else if (size === 'default') {
    className.push('pokemon-type-badge__container--default');
  }

  if (pos === 'left') {
    className.push('pokemon-type-badge__container--left');
  } else if (pos === 'right') {
    className.push('pokemon-type-badge__container--right');
  } else if (pos === 'center') {
    className.push('pokemon-type-badge__container--center');
  }

  return (
    <div className={className.join(' ')}>
      <span>{children}</span>
    </div>
  );
};

PokemonTypeBadge.propTypes = {
  pos: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
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
  size: PropTypes.oneOf(['small', 'large', 'default']).isRequired,
  children: PropTypes.string.isRequired,
};

export default PokemonTypeBadge;
