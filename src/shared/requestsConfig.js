import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default instance;
