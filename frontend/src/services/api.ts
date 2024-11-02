import axios from 'axios';

export const userApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_USER_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const orderApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_ORDER_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const shoppingApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_SHOPPING_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});