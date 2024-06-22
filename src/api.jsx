// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const signup = (userData) => api.post('/users/signup', userData);
export const login = (userData) => api.post('/users/login', userData);
export const createFolder = (folderData, token) => api.post('/folders', folderData, { headers: { Authorization: `Bearer ${token}` } });
export const getFolders = (token) => api.get('/folders', { headers: { Authorization: `Bearer ${token}` } });
export const uploadImage = (imageData, token) => api.post('/images', imageData, { headers: { Authorization: `Bearer ${token}` } });
export const searchImages = (query, token) => api.get(`/images/search?name=${query}`, { headers: { Authorization: `Bearer ${token}` } });
