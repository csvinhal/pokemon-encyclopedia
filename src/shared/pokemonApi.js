import axios from './requestsConfig';

export const fetchAllPokemons = (limit = 12, offset = 0) => {
  return axios.get(`pokemon/?limit=${limit}&offset=${offset}`);
};

export const getPokemon = (id) => axios.get(`pokemon/${id}`);

export const getPokemonSpecie = (id) => axios.get(`pokemon-species/${id}`);

export const getMoveDetail = (name) => axios.get(`move/${name}`);
