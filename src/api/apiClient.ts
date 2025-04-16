import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Перехватчик для автоматической подстановки токена
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Обработка ошибок
api.interceptors.response.use(
  response => response,
  error => {
    toast.error(error.response?.data?.detail || 'Произошла ошибка');
    return Promise.reject(error);
  }
);

export default api;