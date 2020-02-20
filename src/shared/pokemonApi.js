import axios from './requestsConfig';

// eslint-disable-next-line import/prefer-default-export
export const fetchAllPokemons = (limit = 12, offset = 0) => {
  return axios.get(`pokemon/?limit=${limit}&offset=${offset}`);
};

export const getPokemons = (id) => {
  return axios.get(`pokemon/${id}`);
};
