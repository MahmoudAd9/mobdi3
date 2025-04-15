import { Campaign } from '../types/campaign';
import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const campaignService = {
  // Campaign CRUD operations
  async createCampaign(campaignData: Partial<Campaign>) {
    return fetcher(`${API_URL}/campaigns`, {
      method: 'POST',
      body: campaignData,
    });
  },

  async getCampaign(campaignId: string) {
    return fetcher(`${API_URL}/campaigns/${campaignId}`);
  },

  async updateCampaign(campaignId: string, campaignData: Partial<Campaign>) {
    return fetcher(`${API_URL}/campaigns/${campaignId}`, {
      method: 'PUT',
      body: campaignData,
    });
  },

  async deleteCampaign(campaignId: string) {
    const response = await fetch(`${API_URL}/campaigns/${campaignId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Campaign listing and filtering
  async getBrandCampaigns(brandId: string) {
    return fetcher(`${API_URL}/brands/${brandId}/campaigns`);
  },

  async getCreatorCampaigns(creatorId: string) {
    return fetcher(`${API_URL}/creators/${creatorId}/campaigns`);
  },

  // Campaign status management
  async updateCampaignStatus(campaignId: string, status: string) {
    const response = await fetch(`${API_URL}/campaigns/${campaignId}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  },

  // Campaign analytics
  async getCampaignAnalytics(campaignId: string) {
    return fetcher(`${API_URL}/campaigns/${campaignId}/analytics`);
  },
}; 