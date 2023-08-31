import axios, { AxiosInstance } from 'axios';
import GITHUB_BASE_URL from '../constants/base-url';

const http: AxiosInstance = axios.create({
  baseURL: GITHUB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default http;
