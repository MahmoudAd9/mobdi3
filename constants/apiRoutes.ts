export const API_ROUTES = {
  // Auth routes
  AUTH: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    LOGOUT: '/api/auth/logout',
    REFRESH_TOKEN: '/api/auth/refresh-token',
  },
  
  // User routes
  USERS: {
    BASE: '/api/users',
    PROFILE: '/api/users/profile',
    UPDATE_PROFILE: '/api/users/profile/update',
  },
  
  // Creator routes
  CREATORS: {
    BASE: '/api/creators',
    PORTFOLIO: '/api/creators/portfolio',
    CAMPAIGNS: '/api/creators/campaigns',
    ANALYTICS: '/api/creators/analytics',
  },
  
  // Brand routes
  BRANDS: {
    BASE: '/api/brands',
    PROFILE: '/api/brands/profile',
    CAMPAIGNS: '/api/brands/campaigns',
    DISCOVER: '/api/brands/discover',
  },
  
  // Campaign routes
  CAMPAIGNS: {
    BASE: '/api/campaigns',
    CREATE: '/api/campaigns/create',
    UPDATE: '/api/campaigns/update',
    DELETE: '/api/campaigns/delete',
  },
  
  // Messages routes
  MESSAGES: {
    BASE: '/api/messages',
    CONVERSATIONS: '/api/messages/conversations',
    SEND: '/api/messages/send',
  },
  
  // Admin routes
  ADMIN: {
    BASE: '/api/admin',
    USERS: '/api/admin/users',
    ANALYTICS: '/api/admin/analytics',
    MODERATION: '/api/admin/moderation',
  },
} as const; 