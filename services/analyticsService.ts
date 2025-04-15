import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const analyticsService = {
  // Platform-wide analytics
  async getPlatformAnalytics(timeRange: string = '30d') {
    try {
      const response = await fetcher(`${API_URL}/analytics/platform?timeRange=${timeRange}`);
      if (!response.ok) {
        throw new Error(`Failed to get platform analytics: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get platform analytics error:', error);
      throw error;
    }
  },

  // User analytics
  async getUserAnalytics(userId: string, timeRange: string = '30d') {
    try {
      const response = await fetch(
        `${API_URL}/analytics/users/${userId}?timeRange=${timeRange}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to get user analytics: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get user analytics error:', error);
      throw error;
    }
  },

  // Campaign analytics
  async getCampaignAnalytics(campaignId: string, timeRange: string = '30d') {
    try {
      const response = await fetcher(`${API_URL}/analytics/campaigns/${campaignId}?timeRange=${timeRange}`);
      if (!response.ok) {
        throw new Error(`Failed to get campaign analytics: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get campaign analytics error:', error);
      throw error;
    }
  },

  // Revenue analytics
  async getRevenueAnalytics(timeRange: string = '30d') {
    try {
      const response = await fetcher(`${API_URL}/analytics/revenue?timeRange=${timeRange}`);
      if (!response.ok) {
        throw new Error(`Failed to get revenue analytics: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get revenue analytics error:', error);
      throw error;
    }
  },

  // Creator performance analytics
  async getCreatorPerformance(creatorId: string, timeRange: string = '30d') {
    try {
      const response = await fetcher(`${API_URL}/analytics/creators/${creatorId}/performance?timeRange=${timeRange}`);
      if (!response.ok) {
        throw new Error(`Failed to get creator performance: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get creator performance error:', error);
      throw error;
    }
  },

  // Brand performance analytics
  async getBrandPerformance(brandId: string, timeRange: string = '30d') {
    try {
      const response = await fetcher(`${API_URL}/analytics/brands/${brandId}/performance?timeRange=${timeRange}`);
      if (!response.ok) {
        throw new Error(`Failed to get brand performance: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get brand performance error:', error);
      throw error;
    }
  },

  // Custom report generation
  async generateCustomReport(reportConfig: {
    metrics: string[];
    dimensions: string[];
    timeRange: string;
    filters?: Record<string, any>;
  }) {
    try {
      const response = await fetcher(`${API_URL}/analytics/reports/custom`, {
        method: 'POST',
        body: reportConfig,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to generate custom report: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.error('Generate custom report error:', error);
      throw error;
    }
  },

  // Export analytics data
  async exportAnalyticsData(format: 'csv' | 'json' | 'excel', reportId: string) {
    try {
      const response = await fetch(
        `${API_URL}/analytics/export?format=${format}&reportId=${reportId}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to export analytics data: ${response.statusText}`);
      }
      
      return await response.blob();
    } catch (error) {
      console.error('Export analytics data error:', error);
      throw error;
    }
  },
}; 