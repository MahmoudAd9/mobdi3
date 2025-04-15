import { Campaign } from '../types/campaign';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const campaignService = {
  // Campaign CRUD operations
  async createCampaign(campaignData: Partial<Campaign>) {
    try {
      const response = await fetcher(`${API_URL}/campaigns`, {
        method: 'POST',
        body: campaignData,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create campaign: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getCampaign(campaignId: string) {
    try {
      const response = await fetcher(`${API_URL}/campaigns/${campaignId}`);
      if (!response.ok) {
        throw new Error(`Failed to get campaign: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  async updateCampaign(campaignId: string, campaignData: Partial<Campaign>) {
    try {
      const response = await fetcher(`${API_URL}/campaigns/${campaignId}`, {
        method: 'PUT',
        body: campaignData,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update campaign: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      throw error;
    }
  },

  async deleteCampaign(campaignId: string) {
    try {
      const response = await fetch(`${API_URL}/campaigns/${campaignId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete campaign: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Campaign listing and filtering
  async getBrandCampaigns(brandId: string) {
    try {
      const response = await fetcher(`${API_URL}/brands/${brandId}/campaigns`);
      if (!response.ok) {
        throw new Error(`Failed to get brand campaigns: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getCreatorCampaigns(creatorId: string) {
    try {
      const response = await fetcher(`${API_URL}/creators/${creatorId}/campaigns`);
      if (!response.ok) {
        throw new Error(`Failed to get creator campaigns: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Campaign status management
  async updateCampaignStatus(campaignId: string, status: string) {
    try {
      const response = await fetch(`${API_URL}/campaigns/${campaignId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update campaign status: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Campaign analytics
  async getCampaignAnalytics(campaignId: string) {
    try {
      const response = await fetcher(`${API_URL}/campaigns/${campaignId}/analytics`);
      if (!response.ok) {
        throw new Error(`Failed to get campaign analytics: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },
}; 