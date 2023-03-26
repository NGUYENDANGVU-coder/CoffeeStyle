import axios from 'axios';
const apiConfig = axios.create({
    baseURL: 'https://640d9d4ab07afc3b0db18683.mockapi.io/api/',
    headers: {
        'Content-Type':'application/json'
    }
  });
export default apiConfig;
