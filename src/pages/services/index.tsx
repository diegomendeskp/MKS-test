import axios from 'axios';

export const apiProducts = axios.create({
  baseURL:
    'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC',
});
