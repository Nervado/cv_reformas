import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default api;

// baseURL: 'https://virtserver.swaggerhub.com/34s0ft/cv_reformas/1.0.1',
