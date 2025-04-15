export interface Creator {
  id: string;
  userId: string;
  displayName: string;
  bio: string;
  category: string[];
  socialMedia: {
    platform: string;
    handle: string;
    followers: number;
    url: string;
  }[];
  portfolio: {
    id: string;
    title: string;
    description: string;
    mediaUrl: string;
    type: 'image' | 'video' | 'article';
    metrics?: {
      views: number;
      likes: number;
      comments: number;
      shares: number;
    };
    createdAt: string;
  }[];
  metrics: {
    totalFollowers: number;
    averageEngagement: number;
    completedCampaigns: number;
    rating: number;
    reviews: number;
  };
  pricing: {
    base: number;
    currency: string;
    customQuote: boolean;
  };
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    nextAvailableDate?: string;
  };
  preferences: {
    preferredCategories: string[];
    minimumBudget: number;
    preferredBrands?: string[];
  };
  verification: {
    status: 'pending' | 'verified' | 'rejected';
    documents: {
      type: string;
      url: string;
      verifiedAt?: string;
    }[];
  };
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, any>;
} 