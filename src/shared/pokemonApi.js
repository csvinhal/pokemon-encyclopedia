import axios from './requestsConfig';

// eslint-disable-next-line import/prefer-default-export
export const fetchAllPokemons = (limit = 12, offset = 0) => {
  return axios.get(`pokemon/?limit=${limit}&offset=${offset}`);
};

export const getPokemon = (id) => axios.get(`pokemon/${id}`);
