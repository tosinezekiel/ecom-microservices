import { shoppingApi } from "../api";

export class ProductService {
    async getProducts() {
        try {
            const response = await shoppingApi.get('/products');
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    async getProduct(id: number) {
        try {
            const response = await shoppingApi.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw error;
        }
    }
}