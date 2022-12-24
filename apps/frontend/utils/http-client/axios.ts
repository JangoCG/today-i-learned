import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3333/api',
});

const setToken = (token: string) => {
  httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export { httpClient, setToken };
