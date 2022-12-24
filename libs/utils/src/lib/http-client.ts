import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:8060/api',
});

const setToken = (token: string) => {
  httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const EndPoints = {
  calculations: '/v1/ping/',
  timeAndMaterial: '/v1/time-and-material',
  quoteOverview: '/v1/quote-overview/',
};

export { httpClient, setToken };
