import { Creator } from '../types/creator';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const creatorService = {
  // Creator profile operations
  async getCreatorProfile(creatorId: string) {
    return fetcher(`${API_URL}/creators/${creatorId}`);
  },

  async updateCreatorProfile(creatorId: string, profileData: Partial<Creator>) {
    const response = await fetch(`${API_URL}/creators/${creatorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(profileData),
    });
    return response.json();
  },

  // Creator discovery and filtering
  async searchCreators(query: string, filters?: {
    category?: string;
    minRating?: number;
    maxPrice?: number;
  }) {
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
    return response.json();
  },

  // Creator portfolio management
  async getCreatorPortfolio(creatorId: string) {
    return fetcher(`${API_URL}/creators/${creatorId}/portfolio`);
  },

  async addPortfolioItem(creatorId: string, itemData: any) {
    return fetcher(`${API_URL}/creators/${creatorId}/portfolio`, {
      method: 'POST',
      body: itemData,
    });
  },

  // Creator analytics
  async getCreatorAnalytics(creatorId: string) {
    return fetcher(`${API_URL}/creators/${creatorId}/analytics`);
  },

  // Creator verification
  async requestVerification(creatorId: string, verificationData: any) {
    const response = await fetch(`${API_URL}/creators/${creatorId}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(verificationData),
    });
    return response.json();
  },
}; 