import axios from 'axios';

const api = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/34s0ft/cv_reformas/1.0.1',
});

export default api;
