import Axios from './requestsConfig';

export const fetchAllPokemons = (limit = 12, offset = 0) => {
  return Axios.get(`pokemon/?limit=${limit}&offset=${offset}`);
};

export const getPokemon = (id) => Axios.get(`pokemon/${id}`);

export const getPokemonSpecie = (id) => Axios.get(`pokemon-species/${id}`);

export const getMoveDetail = (name) => Axios.get(`move/${name}`);
