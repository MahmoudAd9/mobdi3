import { Brand } from '../types/brand';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const brandService = {
  // Brand profile operations
  async getBrandProfile(brandId: string) {
    try {
      const response = await fetcher(`${API_URL}/brands/${brandId}`);
      if (!response.ok) {
        throw new Error(`Failed to get brand profile: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get brand profile error:', error);
      throw error;
    }
  },

  async updateBrandProfile(brandId: string, profileData: Partial<Brand>) {
    try {
      const response = await fetch(`${API_URL}/brands/${brandId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(profileData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update brand profile: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update brand profile error:', error);
      throw error;
    }
  },

  // Brand discovery and filtering
  async searchBrands(query: string, filters?: {
    category?: string;
    minRating?: number;
  }) {
    try {
      const params = new URLSearchParams();
      if (query) params.append('q', query);
      if (filters?.category) params.append('category', filters.category);
      if (filters?.minRating) params.append('minRating', filters.minRating.toString());

      const response = await fetch(`${API_URL}/brands/search?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to search brands: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Brand verification
  async requestVerification(brandId: string, verificationData: any) {
    try {
      const response = await fetch(`${API_URL}/brands/${brandId}/verify`, {
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

  // Brand analytics
  async getBrandAnalytics(brandId: string) {
    try {
      const response = await fetcher(`${API_URL}/brands/${brandId}/analytics`);
      if (!response.ok) {
        throw new Error(`Failed to get brand analytics: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get brand analytics error:', error);
      throw error;
    }
  },

  // Brand creator management
  async getBrandCreators(brandId: string) {
    try {
      const response = await fetch(`${API_URL}/brands/${brandId}/creators`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get brand creators: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get brand creators error:', error);
      throw error;
    }
  },

  async inviteCreator(brandId: string, creatorId: string, invitationData: any) {
    try {
      const response = await fetch(`${API_URL}/brands/${brandId}/creators/${creatorId}/invite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(invitationData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to invite creator: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Invite creator error:', error);
      throw error;
    }
  },
}; 