import { userApi } from "../api";

export class userService {
    async getUsers() {
        try {
            const response = await userApi.get('/users');
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }

    async getUser(id: number) {
        try {
            const response = await userApi.get(`/users/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching user ${id}:`, error);
            throw error;
        }
    }
}