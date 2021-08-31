import axios from 'axios'

export const BASE_URL_API = 'https://gateway.marvel.com/v1/public';
export const TIMESTAMP = '1616179034'; 
export const API_KEY = 'c22ba519d36ef5d64b7c341b94e6c7f9';
export const MD5 = '8a8b24fa59c32ba7bb0920b0c2721d86';

export const api = axios.create({
  baseURL: BASE_URL_API,
});