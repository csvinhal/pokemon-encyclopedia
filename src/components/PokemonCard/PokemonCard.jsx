import PropTypes from 'prop-types';
import React from 'react';
import PokemonTypeBadge from '../PokemonTypeBadge/PokemonTypeBadge';
import './PokemonCard.scss';

const PokemonCard = (props) => {
  const { pokemon, size, className } = props;
  const cardClassName = ['pokemon-card'];

  const getFormattedId = (id) => {
    const newId = `000${id}`;
    return newId.substr(newId.length - 3);
  };

  pokemon.formattedId = getFormattedId(pokemon.id);

  if (className) {
    cardClassName.push(className);
  }

  if (size === 'small') {
    cardClassName.push('pokemon-card--small');
    pokemon.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.formattedId}.png`;
  } else if (size === 'large') {
    cardClassName.push('pokemon-card--large');
    pokemon.img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.formattedId}.png`;
  }

  return (
    <div className={cardClassName.join(' ')}>
      <h2 className="pokemon-card__title">
        <span className="title__id">
          {'#'}
          {pokemon.formattedId}
        </span>
        <span className="title__name">{pokemon.name}</span>
      </h2>
      <div className="pokemon-card__img">
        <img src={pokemon.img} alt="Pokemon" />
      </div>
      <div className="pokemon-card__footer">
        {pokemon.types
          .sort((a, b) => {
            if (a.slot > b.slot) {
              return 1;
            }
            if (a.slot < b.slot) {
              return -1;
            }

            return 0;
          })
          .map((pokemonType, index) => (
            <PokemonTypeBadge
              key={pokemonType.slot}
              pos={index === 0 ? 'left' : 'right'}
              type={pokemonType.type.name}
              size={size}
            >
              {pokemonType.type.name}
            </PokemonTypeBadge>
          ))}
      </div>
    </div>
  );
};

PokemonCard.defaultProps = {
  className: '',
};

PokemonCard.propTypes = {
  className: PropTypes.string,
  pokemon: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.oneOf(['small', 'large']).isRequired,
};
export default PokemonCard;
