import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://foapi.fairsquare.com/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})