import axios, { AxiosInstance } from 'axios';
import { API_CONFIG } from './config';
  
  export const createApiClient = (baseURL: string): AxiosInstance => {
    const client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
   
    client.interceptors.request.use(
      (config) => {
        
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  
    return client;
  };
  
  // Create API instances
  export const apis = {
    user: createApiClient(API_CONFIG.USER_API),
    order: createApiClient(API_CONFIG.ORDER_API),
    shopping: createApiClient(API_CONFIG.SHOPPING_API)
  };