import axios from 'axios';

const API_HOST_URL = process.env.REACT_APP_API_HOST_URL || 'http://localhost:8000';

const instance = axios.create({
  baseURL: `${API_HOST_URL}/api/`,
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
