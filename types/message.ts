export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'file' | 'system';
  attachments?: {
    id: string;
    url: string;
    type: string;
    name: string;
    size: number;
  }[];
  metadata?: {
    replyTo?: string;
    mentions?: string[];
    links?: string[];
  };
  status: {
    sent: boolean;
    delivered: boolean;
    read: boolean;
    error?: string;
  };
  readBy: {
    userId: string;
    readAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface Conversation {
  id: string;
  type: 'direct' | 'group';
  participants: {
    userId: string;
    role: 'admin' | 'member';
    joinedAt: string;
    leftAt?: string;
  }[];
  metadata?: {
    name?: string;
    avatar?: string;
    description?: string;
  };
  lastMessage?: {
    id: string;
    content: string;
    senderId: string;
    createdAt: string;
  };
  settings: {
    muted: boolean;
    notifications: boolean;
    archived: boolean;
  };
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
} 