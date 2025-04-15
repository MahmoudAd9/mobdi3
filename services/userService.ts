import { User } from '../types/user';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const userService = {
  // Authentication
  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  async register(userData: Partial<User>) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  // User CRUD operations
  async getCurrentUser() {
    return fetcher(`${API_URL}/users/me`);
  },

  async updateUser(userId: string, userData: Partial<User>) {
    return fetcher(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      body: userData,
    });
  },

  async deleteUser(userId: string) {
    return fetcher(`${API_URL}/users/${userId}`, {
      method: 'DELETE',
    });
  },

  // Admin specific operations
  async getAllUsers() {
    return fetcher(`${API_URL}/admin/users`);
  },

  async updateUserStatus(userId: string, status: string) {
    return fetcher(`${API_URL}/admin/users/${userId}/status`, {
      method: 'PUT',
      body: { status },
    });
  },
};