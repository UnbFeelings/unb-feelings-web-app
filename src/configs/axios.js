import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token = '') => {
  if (token.length !== 0) {
    instance.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

export default instance;
