import PropTypes from 'prop-types';
import React from 'react';
import './PokemonCard.scss';

const PokemonCard = (props) => {
  const { name, size, className } = props;
  const cardClassName = ['pokemon-card'];

  if (className) {
    cardClassName.push(className);
  }

  if (size === 'small') {
    cardClassName.push('pokemon-card--small');
  } else if (size === 'large') {
    cardClassName.push('pokemon-card--large');
  }

  return <div className={cardClassName.join(' ')}>{name}</div>;
};

PokemonCard.defaultProps = {
  className: '',
};

PokemonCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
export default PokemonCard;
