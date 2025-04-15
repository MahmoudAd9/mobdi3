import { Brand } from '../types/brand';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const brandService = {
  // Brand profile operations
  async getBrandProfile(brandId: string) {
    return fetcher(`${API_URL}/brands/${brandId}`);
  },

  async updateBrandProfile(brandId: string, profileData: Partial<Brand>) {
    const response = await fetch(`${API_URL}/brands/${brandId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(profileData),
    });
    return response.json();
  },

  // Brand discovery and filtering
  async searchBrands(query: string, filters?: {
    category?: string;
    minRating?: number;
  }) {
    const params = new URLSearchParams();
    if (query) params.append('q', query);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.minRating) params.append('minRating', filters.minRating.toString());

    const response = await fetch(`${API_URL}/brands/search?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Brand verification
  async requestVerification(brandId: string, verificationData: any) {
    const response = await fetch(`${API_URL}/brands/${brandId}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(verificationData),
    });
    return response.json();
  },

  // Brand analytics
  async getBrandAnalytics(brandId: string) {
    return fetcher(`${API_URL}/brands/${brandId}/analytics`);
  },

  // Brand creator management
  async getBrandCreators(brandId: string) {
    const response = await fetch(`${API_URL}/brands/${brandId}/creators`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  async inviteCreator(brandId: string, creatorId: string, invitationData: any) {
    const response = await fetch(`${API_URL}/brands/${brandId}/creators/${creatorId}/invite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(invitationData),
    });
    return response.json();
  },
}; 