import { User } from '../types/user';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const userService = {
  // Authentication
  async login(email: string, password: string) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async register(userData: Partial<User>) {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // User CRUD operations
  async getCurrentUser() {
    try {
      const response = await fetcher(`${API_URL}/users/me`);
      if (!response.ok) {
        throw new Error(`Failed to get current user: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get current user error:', error);
      throw error;
    }
  },

  async updateUser(userId: string, userData: Partial<User>) {
    try {
      const response = await fetcher(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        body: userData,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.error('Update user error:', error);
      throw error;
    }
  },

  async deleteUser(userId: string) {
    try {
      const response = await fetcher(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.error('Delete user error:', error);
      throw error;
    }
  },

  // Admin specific operations
  async getAllUsers() {
    try {
      const response = await fetcher(`${API_URL}/admin/users`);
      if (!response.ok) {
        throw new Error(`Failed to get all users: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get all users error:', error);
      throw error;
    }
  },

  async updateUserStatus(userId: string, status: string) {
    try {
      const response = await fetcher(`${API_URL}/admin/users/${userId}/status`, {
        method: 'PUT',
        body: { status },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update user status: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.error('Update user status error:', error);
      throw error;
    }
  },
};