import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const analyticsService = {
  // Platform-wide analytics
  async getPlatformAnalytics(timeRange: string = '30d') {
    return fetcher(`${API_URL}/analytics/platform?timeRange=${timeRange}`);
  },

  // User analytics
  async getUserAnalytics(userId: string, timeRange: string = '30d') {
    const response = await fetch(
      `${API_URL}/analytics/users/${userId}?timeRange=${timeRange}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.json();
  },

  // Campaign analytics
  async getCampaignAnalytics(campaignId: string, timeRange: string = '30d') {
    return fetcher(`${API_URL}/analytics/campaigns/${campaignId}?timeRange=${timeRange}`);
  },

  // Revenue analytics
  async getRevenueAnalytics(timeRange: string = '30d') {
    return fetcher(`${API_URL}/analytics/revenue?timeRange=${timeRange}`);
  },

  // Creator performance analytics
  async getCreatorPerformance(creatorId: string, timeRange: string = '30d') {
    return fetcher(`${API_URL}/analytics/creators/${creatorId}/performance?timeRange=${timeRange}`);
  },

  // Brand performance analytics
  async getBrandPerformance(brandId: string, timeRange: string = '30d') {
    return fetcher(`${API_URL}/analytics/brands/${brandId}/performance?timeRange=${timeRange}`);
  },

  // Custom report generation
  async generateCustomReport(reportConfig: {
    metrics: string[];
    dimensions: string[];
    timeRange: string;
    filters?: Record<string, any>;
  }) {
    return fetcher(`${API_URL}/analytics/reports/custom`, {
      method: 'POST',
      body: reportConfig,
    });
  },

  // Export analytics data
  async exportAnalyticsData(format: 'csv' | 'json' | 'excel', reportId: string) {
    const response = await fetch(
      `${API_URL}/analytics/export?format=${format}&reportId=${reportId}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.blob();
  },
}; 