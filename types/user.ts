export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'creator' | 'brand';
  status: 'active' | 'inactive' | 'suspended';
  profileImage?: string;
  phoneNumber?: string;
  country?: string;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
  preferences?: {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark';
  };
  verification?: {
    emailVerified: boolean;
    phoneVerified: boolean;
    identityVerified: boolean;
  };
  metadata?: Record<string, any>;
} 