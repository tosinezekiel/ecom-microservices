import { orderApi } from "../api";

export class OrderService {
    async getOrders() {
        try {
            const response = await orderApi.get('/orders');
            return response.data;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    }

    async getProduct(id: number) {
        try {
            const response = await orderApi.get(`/orders/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw error;
        }
    }
}