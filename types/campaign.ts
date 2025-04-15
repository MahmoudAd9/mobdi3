export interface Campaign {
  id: string;
  title: string;
  description: string;
  brandId: string;
  status: 'draft' | 'active' | 'completed' | 'cancelled';
  budget: {
    amount: number;
    currency: string;
  };
  timeline: {
    startDate: string;
    endDate: string;
    submissionDeadline: string;
  };
  requirements: {
    platform: string[];
    contentType: string[];
    deliverables: string[];
    guidelines: string;
  };
  creators: {
    id: string;
    status: 'invited' | 'applied' | 'accepted' | 'rejected' | 'completed';
    submissionDate?: string;
    feedback?: string;
    rating?: number;
  }[];
  metrics: {
    views?: number;
    engagement?: number;
    clicks?: number;
    conversions?: number;
  };
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, any>;
} 