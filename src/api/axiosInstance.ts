import axios from 'axios';

// Crea una instancia de Axios con la configuración base
const axiosInstance = axios.create({
  baseURL: 'https://www.bungie.net/Platform/',  // URL base de la API de Bungie
  headers: {
    'X-API-Key': 'b15a78ffb82644b7828da2ed98f3c065',  // API key de Bungie
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
