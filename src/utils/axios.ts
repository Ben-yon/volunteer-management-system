import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL, // Replace with your API endpoint
  // Add other default configurations (headers, timeout, etc.)
});

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Handle request errors (e.g., log, display error message)
      return Promise.reject(error);
    }
  );
  
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle response errors (e.g., handle 401, display error message)
      if (error.response && error.response.status === 401) {
        // Handle unauthorized case (e.g., logout, redirect)
      }
      return Promise.reject(error);
    }
  );

  export default api