import PropTypes from 'prop-types';
import React from 'react';
import './PokemonCard.scss';

const PokemonCard = (props) => {
  const { pokemon, size, className } = props;
  const cardClassName = ['pokemon-card'];

  const getFormattedId = (id) => {
    const newId = `000${id}`;
    return newId.substr(newId.length - 3);
  };

  pokemon.id = getFormattedId(pokemon.id);

  if (className) {
    cardClassName.push(className);
  }

  if (size === 'small') {
    cardClassName.push('pokemon-card--small');
    pokemon.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`;
  } else if (size === 'large') {
    cardClassName.push('pokemon-card--large');
    pokemon.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`;
  }

  return (
    <div className={cardClassName.join(' ')}>
      <h2 className="pokemon-card__title">
        <span className="title__id">
          {'#'}
          {pokemon.id}
          {' '}
        </span>
        <span className="title__name">{pokemon.name}</span>
        <img src={pokemon.img} alt="Pokemon" />
      </h2>
    </div>
  );
};

PokemonCard.defaultProps = {
  className: '',
};

PokemonCard.propTypes = {
  className: PropTypes.string,
  pokemon: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.string.isRequired,
};
export default PokemonCard;
