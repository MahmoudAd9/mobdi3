export interface Brand {
  id: string;
  userId: string;
  companyName: string;
  description: string;
  logo: string;
  website: string;
  industry: string[];
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  location: {
    country: string;
    city?: string;
    address?: string;
  };
  contacts: {
    primary: {
      name: string;
      email: string;
      phone?: string;
      role: string;
    };
    additional?: {
      name: string;
      email: string;
      phone?: string;
      role: string;
    }[];
  };
  socialMedia: {
    platform: string;
    url: string;
    followers?: number;
  }[];
  metrics: {
    totalCampaigns: number;
    activeCreators: number;
    totalSpent: number;
    averageRating: number;
    reviews: number;
  };
  preferences: {
    preferredCategories: string[];
    targetAudience: string[];
    budgetRange: {
      min: number;
      max: number;
      currency: string;
    };
  };
  verification: {
    status: 'pending' | 'verified' | 'rejected';
    documents: {
      type: string;
      url: string;
      verifiedAt?: string;
    }[];
  };
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled';
    startDate: string;
    endDate?: string;
  };
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, any>;
} 