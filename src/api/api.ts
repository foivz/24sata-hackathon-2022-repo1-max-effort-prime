import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hackathon-24-sata.herokuapp.com/api',
});

export default api;
