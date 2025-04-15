import { Creator } from '../types/creator';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const creatorService = {
  // Creator profile operations
  async getCreatorProfile(creatorId: string) {
    try {
      const response = await fetcher(`${API_URL}/creators/${creatorId}`);
      if (!response.ok) {
        throw new Error(`Failed to get creator profile: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get creator profile error:', error);
      throw error;
    }
  },

  async updateCreatorProfile(creatorId: string, profileData: Partial<Creator>) {
    try {
      const response = await fetch(`${API_URL}/creators/${creatorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(profileData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update creator profile: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update creator profile error:', error);
      throw error;
    }
  },

  // Creator discovery and filtering
  async searchCreators(query: string, filters?: {
    category?: string;
    minRating?: number;
    maxPrice?: number;
  }) {
    try {
      const params = new URLSearchParams();
      if (query) params.append('q', query);
      if (filters?.category) params.append('category', filters.category);
      if (filters?.minRating) params.append('minRating', filters.minRating.toString());
      if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());

      const response = await fetch(`${API_URL}/creators/search?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to search creators: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Search creators error:', error);
      throw error;
    }
  },

  // Creator portfolio management
  async getCreatorPortfolio(creatorId: string) {
    try {
      const response = await fetcher(`${API_URL}/creators/${creatorId}/portfolio`);
      if (!response.ok) {
        throw new Error(`Failed to get creator portfolio: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get creator portfolio error:', error);
      throw error;
    }
  },

  async addPortfolioItem(creatorId: string, itemData: any) {
    try {
      const response = await fetcher(`${API_URL}/creators/${creatorId}/portfolio`, {
        method: 'POST',
        body: itemData,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to add portfolio item: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.error('Add portfolio item error:', error);
      throw error;
    }
  },

  // Creator analytics
  async getCreatorAnalytics(creatorId: string) {
    try {
      const response = await fetcher(`${API_URL}/creators/${creatorId}/analytics`);
      if (!response.ok) {
        throw new Error(`Failed to get creator analytics: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get creator analytics error:', error);
      throw error;
    }
  },

  // Creator verification
  async requestVerification(creatorId: string, verificationData: any) {
    try {
      const response = await fetch(`${API_URL}/creators/${creatorId}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(verificationData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to request verification: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Request verification error:', error);
      throw error;
    }
  },
}; 