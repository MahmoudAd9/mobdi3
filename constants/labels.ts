export const LABELS = {
  // Common actions
  ACTIONS: {
    SAVE: 'Save',
    CANCEL: 'Cancel',
    DELETE: 'Delete',
    EDIT: 'Edit',
    SUBMIT: 'Submit',
    LOGIN: 'Login',
    SIGNUP: 'Sign Up',
    LOGOUT: 'Logout',
  },
  
  // Form labels
  FORMS: {
    EMAIL: 'Email',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirm Password',
    NAME: 'Name',
    USERNAME: 'Username',
    BIO: 'Bio',
    PHONE: 'Phone Number',
    WEBSITE: 'Website',
  },
  
  // Navigation
  NAVIGATION: {
    HOME: 'Home',
    DASHBOARD: 'Dashboard',
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
    MESSAGES: 'Messages',
    NOTIFICATIONS: 'Notifications',
    HELP: 'Help',
  },
  
  // User roles
  ROLES: {
    CREATOR: 'Creator',
    BRAND: 'Brand',
    ADMIN: 'Admin',
  },
  
  // Campaign status
  CAMPAIGN_STATUS: {
    DRAFT: 'Draft',
    ACTIVE: 'Active',
    COMPLETED: 'Completed',
    CANCELLED: 'Cancelled',
  },
  
  // Error messages
  ERRORS: {
    REQUIRED: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email',
    PASSWORD_MISMATCH: 'Passwords do not match',
    INVALID_CREDENTIALS: 'Invalid email or password',
    SOMETHING_WRONG: 'Something went wrong. Please try again.',
  },
  
  // Success messages
  SUCCESS: {
    PROFILE_UPDATED: 'Profile updated successfully',
    CAMPAIGN_CREATED: 'Campaign created successfully',
    MESSAGE_SENT: 'Message sent successfully',
  },
} as const; 